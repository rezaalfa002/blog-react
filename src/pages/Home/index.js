import React ,{useEffect, useState} from 'react';
import { BlogItem, Button, Gap } from '../../components';
import './home.scss'
import {useHistory} from 'react-router-dom' //untuk berpindah ke page lain
// import Axios from 'axios' //npm untuk menghubungkan db yang diaktifkan dari backend/API
import {useDispatch, useSelector} from 'react-redux'
import { setDataBlog } from '../../config/redux/action/homeAction';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import axios from 'axios';
const url = 'https://reza-api.cyclic.app'
const Home = () => {
  
  const [counter, setCounter] = useState(1) //penomoran pagination
  const dispatch = useDispatch()
  const {dataBlog,page} = useSelector(state => state.homeReducer) //react-redux
  // const [dataBlog, setDataBlog] = useState([]); //render db ke home / state lokal
  console.log('page : ', page)
  // const {dataBlogs, name} = useSelector(state => state) //react-redux
  //console.log('state global :', stateGlobal)
   
  useEffect (() => { //menghubungkan db yang diaktifkan dari backend/API
    dispatch(setDataBlog(counter)) //Async store dengan redux thunk/merefresh data
  },[counter,dispatch])
  
  const history = useHistory() //untuk berpindah ke page lain

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter-1)
    console.log(counter)

  }

  const next = () => {
    setCounter (counter === page.totalPage ? page.totalPage: counter + 1)
    console.log(counter)
  }

  const confirmDelete =  (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do this..',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            axios.delete(url + `/v1/blog/post/${id}`)
            .then(res => {
              console.log('sukses delete' , res)
              dispatch(setDataBlog(counter)) //Async store dengan redux thunk/merefresh data
            })
            .catch(err => {
              console.log('error delete ', err)
            })
          }
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  }


  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
            <Button title="create blog" onClick={()=> history.push('/create-blog') }/>
      </div>
      
      <Gap height={20} />
      <div className='content-wrapper'>

      {dataBlog.map (blog => {
      return <BlogItem 
      key={blog._id} 
      image={url + `/${blog.image}`} 
      title={blog.title}
      body={blog.body}
      date={blog.createdAt}
      name={blog.author.name}
      _id={blog._id}
      onDelete={confirmDelete}
      />
      })}
      
      </div>
      <div className='pagination'>
      <Button title="Previous" onClick={previous}/>
      <Gap width={20}/>
      <p className='text-page'>{page.currentPage} / {page.totalPage}</p>
      <Gap width={20}/>
      <Button title="Next" onClick={next}/>
      </div>
      <Gap height={20}/>
    </div>
  
  )
};

export default Home;
