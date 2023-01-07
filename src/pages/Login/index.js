import React from 'react';
import { LoginBG } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
// pakai scss register
import {useHistory} from 'react-router-dom' //untuk berpindah ke page lain
const Login = () => {
  const history = useHistory() //untuk berpindah ke page lain
  return (
    <div className='main-page'>
    <div className='left'>
        <img src={LoginBG} className='bg-image' alt='LoginBG'/>
    </div>
    <div className='right'>
        <p className='title'>Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18}/>
        <Input label="Password" placeholder="Password" />
        <Gap height={50}/>
        <Button title="Login" onClick={()=> history.push('/') }/>
        <Gap height={100}/>
        <Link title="Registrasi Disini .." onClick={()=> history.push('/register') }/>
    </div>
</div>
  )
};

export default Login;