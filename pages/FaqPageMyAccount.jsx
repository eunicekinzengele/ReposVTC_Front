import React from 'react'
import Topbar from '../components/layout/Topbar'
import Banner from './Banner'
import FaqInterface1 from './FaqMyAccountInterface'
import Header from './Header'
import FaqMyAccountInterface from './FaqMyAccountInterface'

export default function FaqPageMyAccount() {
  return (
    <div>
        <Topbar/>
        <Header/>
        <Banner/>
        <FaqMyAccountInterface/>
    </div>
  )
}
