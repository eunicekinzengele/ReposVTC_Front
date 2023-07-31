import React from 'react'
import TopBar from '../components/layout/Topbar'
import DescriptionAirportTransfert from './DescriptionAirportTransfert'
import DescriptionSteps from './DescriptionSteps'
import FaqAirport from './FaqAirport'
import Header from './Header'
import HeroBarAirportTranfert from './HeroBarAirportTranfert'
import StepsTransfert from './StepsTransfert'
import Footer from './Footer'

export default function AirportTransfertPage() {
  return (
    <div>
        <TopBar/>
        <Header/>
        <HeroBarAirportTranfert/>
        <DescriptionAirportTransfert/>
        <StepsTransfert/>
        <DescriptionSteps/>
        <FaqAirport/>
       <Footer/>
    </div>
  )
}
