import React from 'react'
import TopBar from '../components/layout/Topbar'
import DescriptionAirportTransfert from './DescriptionAirportTransfert'
import DescriptionSteps from './DescriptionSteps'
// import FaqAirport from './FaqAirport'
import Header from './Header'
import HeroBarAirportTranfert from './HeroBarAirportTranfert'
import StepsTransfert from './StepsTransfert'
import Footer from './Footer'
import PresentationAirportTrasfert from './PresentationAirportTrasfert'

export default function AirportTransfertPage() {
  return (
    <div>
        <TopBar/>
        <Header/>
        <HeroBarAirportTranfert/>
        <PresentationAirportTrasfert/>
        <DescriptionAirportTransfert/>
        <StepsTransfert/>
        <DescriptionSteps/>
        {/* <FaqAirport/> */}
       <Footer/>
    </div>
  )
}
