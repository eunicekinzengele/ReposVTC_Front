import React from 'react'
import Topbar from '../components/layout/Topbar'
import Banner from './Banner'
import Header from './Header'
import UserInformations from './UserInformations'
import Footer from './Footer'

export default function PaymentPage() {
  return (
    <div>
        <Topbar/>
        <Header/>
        <Banner/>
        <UserInformations/>
        <Footer/>
    </div>
  )
}
