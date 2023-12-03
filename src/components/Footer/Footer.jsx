import React from 'react'
import styles from './Footer.module.css'
import inst from './img/inst.png'
import facebook from './img/facebook.png'
import pin from './img/pin.png'
import twit from './img/twit.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <span>Help</span>
        <span>Our sponsor</span>
        <span>Email: aveliclo@gmail.com</span>
        <span>Робота Журавля О.Д. ©</span>
        <img src={inst} alt="inst"/>
        <img src={facebook} alt="facebook"/>
        <img src={pin} alt="pin"/>
        <img src={twit} alt="twit"/>
    </footer>
  )
}

export default Footer