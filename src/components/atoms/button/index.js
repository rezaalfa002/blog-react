import React from 'react';
import './button.scss'
const Button = ({title,...rest}) => {
  return <button className='button'{...rest}>{title}</button> //kenapa beda karena agar bentuk/lebar button sama
}

export default Button;
