import React from 'react'
import Topbar from '../components/layout/Topbar'
import Banner from './Banner'
// import FaqAirportInterface from './FaqMyAccountInterface'
import Header from './Header'
import FaqPaymentInterface from './FaqPaymentInterface'

export default function FaqPagePayment() {
  return (
    <div>
        <Topbar/>
        <Header/>
        <Banner/>
        <FaqPaymentInterface/>
    </div>
  )
}
