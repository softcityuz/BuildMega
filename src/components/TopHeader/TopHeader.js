import React from 'react'
import './TopHeader.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook , faInstagram, faTelegramPlane, faYoutube, } from '@fortawesome/free-brands-svg-icons'
import {faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons'
function TopHeader() {
  return (
    <div className='TopHeader'>
        <div className='container'>
            <div className='wrapper'>
                <div className='left_box'>
                    <div className='adress'>
                        <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Tashkent , Yunusobod 7885</p>    
                    </div>
                    <div className='call_me'>
                        <a href='tel: +998 90 806 20 04'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Phones : +998 90 806 20 04</a>
                    </div>    
                </div>
                <div className='right_box'>
                    <div className='socials'>
                        <ul>
                            <li className='facebook'><a href=""><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> </a></li>
                            <li className='tele'><a href=""><FontAwesomeIcon icon={faTelegramPlane}></FontAwesomeIcon> </a></li>
                            <li className='insta'><a href=""><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> </a></li>
                            <li className='youtube'><a href=""><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon> </a></li>
                        </ul>
                    </div>    
                </div>    
            </div>
        </div>
    </div>
  )
}

export default TopHeader