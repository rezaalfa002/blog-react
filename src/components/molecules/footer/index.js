import React from 'react';
import {alfareza, ICexpress,ICmongodb, ICnodejs, ICreact } from '../../../assets';
import './footer.scss'
const Icon = ({img}) =>{
    return (
        <div className='icon-wrapper'>
            <img className='icon-medsos' src={img} alt="icon"/>
        </div>
    )
}
const Footer = () => {
  return (
  <div>
      <div className='footer'>
          <div>
              <img className='logo' src={alfareza} alt="Soldier" />
          </div>
            <div className='social-wrapper'>
                <Icon img={ICmongodb}  alt=''/>
                <Icon img={ICexpress}  alt=''/>
                <Icon img={ICreact}  alt=''/>
                <Icon img={ICnodejs}  alt=''/>
        
                
            </div>
      </div>
      <div className='copyright'>
          <p>Copyright 2022 alfareza</p>
      </div>
  </div>
  )
}

export default Footer;
