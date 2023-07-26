import React from 'react'
import TopBar from '../components/layout/Topbar'
import DescriptionAirportTransfert from './DescriptionAirportTransfert'
import Header from './Header'
import HeroBarAirportTranfert from './HeroBarAirportTranfert'

export default function AirportTransfertPage() {
  return (
    <div>
        <TopBar/>
        <Header/>
        <HeroBarAirportTranfert/>
        <DescriptionAirportTransfert/>
    </div>
  )
}
