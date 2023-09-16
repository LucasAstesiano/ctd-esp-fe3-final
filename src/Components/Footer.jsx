import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {
  const {theme}=useContext(ContextGlobal)

  return (
    <div>
      <h4 style={{background:" rgb(3, 117, 155)", textAlign:"center"}}> <a href='#top'> Back to the top </a> </h4>  
      <footer>
        <div className='redes'>
          <img src="./images/ico-instagram.png" alt="instagram" style={{background: theme.font}} />
          <img src="./images/ico-facebook.png" alt="facebook" style={{background: theme.font}} />
          <img src="./images/ico-tiktok.png" alt="tiktok" style={{background: theme.font}} />
          <img src="./images/ico-whatsapp.png" alt="whatsaap" style={{background: theme.font}} />

        </div>
        <p>Powered by</p>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt='DH-logo' />
      </footer>
      </div>
  )
}

export default Footer
