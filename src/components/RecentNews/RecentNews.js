import React from 'react'
import {Link } from 'react-router-dom'
import './RecentNews.scss'
import img1 from '../../assets/slider1.jpg'
import img2 from '../../assets/slider2.jpg'
import img3 from '../../assets/slider3.jpg'
function RecentNews() {
  return (
    <div className='RecentNews'>
        <div className='container'>
            <div className="intro">
                <h2>So'ngi yangiliklar</h2>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <Link to="" >
                        <div className='top'>
                            <img src={img1} alt="Image" />
                        </div>
                        <div className='news_text'>
                            <h3>Bke parts warehouse.DE</h3>
                            <span className='date'>2022.04.03</span>
                            <p>We take our time for lunch, because we didn't have a breakfast. Usually I don't eat breakfast,so My mother always punish me )</p>    
                        </div>    
                    </Link>
                </div>    
                <div className='col-md-4'>
                    <Link to="" >
                        <div className='top'>
                            <img src={img2} alt="Image" />
                        </div>
                        <div className='news_text'>
                            <h3>Bke parts warehouse.DE</h3>
                            <span className='date'>2022.04.03</span>
                            <p>We take our time for lunch, because we didn't have a breakfast. Usually I don't eat breakfast,so My mother always punish me )</p>    
                        </div>    
                    </Link>
                </div>    
                <div className='col-md-4'>
                    <Link to="" >
                        <div className='top'>
                            <img src={img3} alt="Image" />
                        </div>
                        <div className='news_text'>
                            <h3>Bke parts warehouse.DE</h3>
                            <span className='date'>2022.04.03</span>
                            <p>We take our time for lunch, because we didn't have a breakfast. Usually I don't eat breakfast,so My mother always punish me )</p>    
                        </div>    
                    </Link>
                </div>    
            </div>    
        </div>
    </div>
  )
}

export default RecentNews