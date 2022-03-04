import React from 'react'
import Header from '../components/Header/Header'
import HomeCarousel from '../components/HomeCarousel/HomeCarousel'
import Services from '../components/Services/Services'
import TopHeader from '../components/TopHeader/TopHeader'

function HomePage() {
  return (
    <div>
        <TopHeader />
        <Header  />
        <HomeCarousel />
        <Services />
    </div>
  )
}

export default HomePage