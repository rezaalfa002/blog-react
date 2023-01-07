import React from 'react';
import { Button, Gap } from '../..';
//import { RegisterBG } from '../../../assets';
import "./blogitem.scss"
import {useHistory} from 'react-router-dom' //untuk berpindah ke page lain

const BlogItem = (props) => {
  const history = useHistory() //untuk berpindah ke page lain
  const{image,title,name,date,body,_id,onDelete} = props; //destrukturing props
  return <div className='blog-item'>
      <img className='image-thumb' src={image} alt="post"/>
      <div className='content-detail'>
        <div className='title-wrapper'>
        <p className='title'>{title}</p>
        <div className='edit-wrapper'>
          <p className='edit' onClick={()=> history.push(`/create-blog/${_id}`)}>edit</p> | <p className='delete' onClick={() => onDelete(_id)}>delete</p>
        </div>
        </div>
            <p className='author'>{name} - {date}</p>
            <p className='body'>{body}</p>
            <Gap height={20}/>
            <Button title='View Detail' onClick={()=> history.push(`/detail-blog/${_id}`)} />
      </div>
  </div>;
};

export default BlogItem;
