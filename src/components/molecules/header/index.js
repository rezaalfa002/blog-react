import React from 'react';
import './header.scss'
import {useHistory} from 'react-router-dom' //untuk berpindah ke page lain
const Header = () => {
  const history = useHistory() //untuk berpindah ke page lain
  return <div className='header'>
      <p className='logo-app'>Alfareza-MERN</p>
      <p className='menu-item' onClick={()=> history.push('/login') }>Log Out</p>
  </div>;
};

export default Header;
