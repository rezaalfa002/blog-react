import React, { useEffect, useState } from 'react';
import { Button, Gap, Input, Link, TextArea, Upload } from '../../components';
import './createblog.scss'
import {useHistory, withRouter} from 'react-router-dom' //untuk berpindah ke page lain
import axios from 'axios'
import { postToAPI, setForm, setImgPreview, updateToAPI } from '../../config/redux/action';
import {useSelector,useDispatch} from 'react-redux'
const url = 'https://rz-app.adaptable.app/' 
const CreateBlog = (props) => {
  
  const {form, imgPreview} = useSelector(state => state.createBlogReducer);
  const {title, body, image} = form;
  const dispatch = useDispatch();
    

  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  // const [image, setImage] = useState('');
  // const [imagePreview, setImagePreview] = useState(null);
  const history = useHistory() //untuk berpindah ke page lain
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect (() => {
    console.log('params: ', props)
    const id = props.match.params.id
    if(id) {
    setIsUpdate(true);
    axios.get(url + `/v1/blog/post/${id}`)
    .then(res => {
      const data = res.data.data
      console.log('res: ', data);
      dispatch(setForm('title',data.title))
      dispatch(setForm('body',data.body))
      dispatch(setImgPreview(url + `/${data.image}`))
    })  
    .catch(err =>{
      console.log('err :', err)
    } )
    }
    }, [props])

  const onSubmit = () => {
    const id = props.match.params.id
    if(isUpdate){
      console.log('update data')
      
      updateToAPI(form,id)

    } else{
      console.log('create data')
      
      postToAPI(form)

    }
   
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm('image',file))
    dispatch(setImgPreview(URL.createObjectURL(file)))
}

  
  return (
  <div className='blog-post'>
    <Link title="< kembali" onClick={()=> history.push('/') } />
      <p className='title'>{isUpdate ?  'update' : 'Create new'} Blog Page</p>
      <Input label="Post Title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))}/>
      <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))}/>
      <Gap  height={20}/>
      <div className='button-action'>
      <Button title={isUpdate ?  'update' : 'simpan'} onClick={onSubmit}/>
      </div>
      <Gap  height={50}/>
  </div>
  )
};

export default withRouter(CreateBlog);
