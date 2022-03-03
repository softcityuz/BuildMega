import React from 'react'
import {Carousel, CarouselItem , } from 'react-bootstrap'
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import './HomeCarousel.scss'
function HomeCarousel() {
  return (
    <div className='HomeCarousel'>
            <Carousel fade>
                <Carousel.Item>
                    <div className='for_backline1'>
                        <div className='slider1'>
                            <div className='sometext'>
                                <h1>QURILISHLAR</h1>
                                <h4>BIZ QURGAN BINOLARNI LOYIHALAR BO'LIMIDA KO'RING</h4>    
                            </div>
                        </div>
                     </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className='for_backline2'>
                        <div className='slider2'>
                            <div className='sometext'>
                                <h1>QURILISHLAR</h1>
                                <h4>Biz qurgan 10 ta binolarni qanday qurilganini koring </h4>    
                            </div>
                        </div>
                     </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className='for_backline3'>
                        <div className='slider3'>
                            <div className='sometext'>
                                <h1>QURILISHLAR</h1>
                                <h4>Biz qurgan 10 ta binolarni qanday qurilganini koring </h4>    
                            </div>
                        </div>
                     </div>
                </Carousel.Item>
            </Carousel>
        </div>
  )
}

export default HomeCarousel