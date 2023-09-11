import React from 'react'
import Topbar from '../components/layout/Topbar'
import Banner from './Banner'
import FaqAirportInterface from './FaqMyAccountInterface'
import Header from './Header'
import FaqManageInterface from './FaqManageInterface'


export default function FaqPageManage() {
  return (
    <div>
        <Topbar/>
        <Header/>
        <Banner/>
        <FaqManageInterface/>
    </div>
  )
}
