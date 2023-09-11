import React from 'react'
import Topbar from '../components/layout/Topbar'
import Banner from './Banner'
// import FaqAirportInterface from './FaqInterface1'
import Header from './Header'
import FaqGuideInterface from './FaqGuideInterface'

export default function FaqPageGuide() {
  return (
    <div>
        <Topbar/>
        <Header/>
        <Banner/>
        <FaqGuideInterface/>
    </div>
  )
}
