import React from 'react';
import { ICDiscord, ICFacebook, ICGithub, ICInstagram, ICTelegram, ICTwitter, LogoKabayan } from '../../../assets';
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
              <img className='logo' src={LogoKabayan} alt="Soldier" />
          </div>
            <div className='social-wrapper'>
                <Icon img={ICFacebook}  alt='facebook'/>
                <Icon img={ICInstagram}  alt='facebook'/>
                <Icon img={ICTelegram}  alt='facebook'/>
                <Icon img={ICTwitter}  alt='facebook'/>
                <Icon img={ICGithub}  alt='facebook'/>
                <Icon img={ICDiscord}  alt='facebook'/>
                
            </div>
      </div>
      <div className='copyright'>
          <p>Copyright 2022 alfareza</p>
      </div>
  </div>
  )
}

export default Footer;
