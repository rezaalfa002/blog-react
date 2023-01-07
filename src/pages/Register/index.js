import React from 'react';
import { RegisterBG } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import './register.scss' //styling di react automatis akan menjadi global,
// gamasalah kalau login pakai class main page
import {useHistory} from 'react-router-dom' //untuk berpindah ke page lain
const Register = () => {
    const history = useHistory() //untuk berpindah ke page lain
  return (
  <div className='main-page'>
      <div className='left'>
          <img src={RegisterBG} className='bg-image' alt='RegisterBG'/>
      </div>
      <div className='right'>
          <p className='title'>Register</p>
          <Input label="Full Name" placeholder="Full Name" />
          <Gap height={18}/>
          <Input label="Email" placeholder="Email" />
          <Gap height={18}/>
          <Input label="Password" placeholder="Password" />
          <Gap height={50}/>
          <Button title="Register" onClick={()=> history.push('/login')}/>
          <Gap height={100}/>
          <Link title="Kembali Ke Login" onClick={()=> history.push('/login')}/>
      </div>
  </div>
  )
};

export default Register;