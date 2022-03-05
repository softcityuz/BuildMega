import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/white_logo.png'
import './Footer.scss'
function Footer() {
  return (
    <div className='Footer'>
        <div className='wrapper container'>
            <div className='left_box'>
                <a href="/htt1/swsw" ><img src={logo}  alt="rasm bor edi!"/></a>
                <p>Qanaqadir shior yoki uwanga uxwagan narsa yozildi i u uzzzuuu bolishi kerekan</p>   
            </div>    
            <div className='right_box'>
                <div className='navigation'>
                    <h4>Tezkor havolalar</h4>
                    <ul>
                        <li><Link to="">Xizmatlar</Link></li>    
                        <li><Link to="">Tariximiz</Link></li>    
                        <li><Link to="">Loyihalar</Link></li>    
                        <li><Link to="">Yangiliklar</Link></li>    
                    </ul>    
                </div>
                <div className='contacts'>
                    <h4>Aloqa</h4>
                    <p>Adress: <span>Yunusobod 14-daha,Toshkent</span></p>    
                    <p>Phones: <a href='tel: +998 90 806 2004'>+998 90 806 20 04</a></p>    
                    <p>Email: <span>info@gmail.com</span></p>    
                    <p>Ish vaqti: <span>Du-Ju, 9:00 - 18:00</span></p>    
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Footer