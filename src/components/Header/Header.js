import React from 'react'
import logo from '../../assets/logo.png'
import './Header.scss'
function Header() {
  return (
    <div className='Header'>
            <div className='container'>
                <div className='smth'>
                    <div className='logo'>
                        <a href=""><img src={logo} /></a>    
                    </div>
                    <div className='links'>
                        <ul>
                            <li><a href="">Biz haqimizda</a></li>
                            <li><a href="">Xizmatlar</a></li>
                            <li><a href="">Loyihalar</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Aloqa</a></li>
                        </ul>    
                    </div>     
                </div>   
            </div>
        </div>
  )
}

export default Header