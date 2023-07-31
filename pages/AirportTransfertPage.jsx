import React from 'react'
import TopBar from '../components/layout/Topbar'
import DescriptionAirportTransfert from './DescriptionAirportTransfert'
import DescriptionSteps from './DescriptionSteps'
import Header from './Header'
import HeroBarAirportTranfert from './HeroBarAirportTranfert'
import StepsTransfert from './StepsTransfert'

export default function AirportTransfertPage() {
  return (
    <div>
        <TopBar/>
        <Header/>
        <HeroBarAirportTranfert/>
        <DescriptionAirportTransfert/>
        <StepsTransfert/>
        <DescriptionSteps/>
    </div>
  )
}
