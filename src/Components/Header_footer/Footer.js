import React from 'react'
import {CityLogo} from '../ui/icons'
const Footer = () => {
  return (
      <footer className="bck_blue">
        <div className="footer_logo">
            <CityLogo 
            Link={true}
            LinkTo="/"
            width="70px"
            height="70px"/>
        </div>
        <div className="footer_discl">
            Manchester City F.C. 2018 All Right Reserved.
        </div>
      </footer>
  )
}
export default Footer;
