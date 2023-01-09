import React, { useEffect, useState } from 'react';
// import { RegisterBG } from '../../assets';
import './detailblog.scss'
import {useHistory, withRouter} from 'react-router-dom' //untuk berpindah ke page lain
import { Gap, Link } from '../../components';
import axios from 'axios';

const url = 'https://rz-api.cyclic.app/'
 
const DetailBlog = (props) => {
  const [data,setData]=useState({})
  useEffect(()=>{
    
    const id = props.match.params.id;
    axios.get(url + `/v1/blog/post/${id}`)
    .then(res => {
      console.log('success',res)
      setData(res.data.data)
    })
    .catch(err =>{
      console.log('error : ',err )
    })
  },[props])

  const history = useHistory() //untuk berpindah ke page lain
  if (data.author){
  return( 
  <div className='detail-blog-wrapper'>
      <img className='img-cover' src={ url + `/${data.image}`} alt="thumb"/>
      <p className='blog-title'>{data.title}</p>
      <p className='blog-author'>{data.author.name} - {data.createdAt}</p>
      <p className='blog-body'>{data.body}</p>
      <Gap height={20}/>
      <Link title='Kembali Ke HOME' onClick={()=> history.push('/')}/>
  </div>)}
return <p>loading data ...</p>
};


export default withRouter(DetailBlog);
