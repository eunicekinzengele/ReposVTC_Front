import React from 'react'
import Topbar from '../components/layout/Topbar'
import Banner from './Banner'
import FaqAirportInterface from './FaqAirportInterface'
import Header from './Header'

export default function FaqAirportPage() {
  return (
    <div>
        <Topbar/>
        <Header/>
        <Banner/>
        <FaqAirportInterface/>
    </div>
  )
}
