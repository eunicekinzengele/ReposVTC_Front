import React from 'react'
import Topbar from '../components/layout/Topbar'
import Banner from './Banner'
import ContactDetail from './ContactDetail'
import Footer from './Footer'
import Header from './Header'

export default function ContactPage() {
  return (
    <div>
        <Topbar/>
        <Header/>
        <Banner/>
        <ContactDetail/>
        <Footer/>
    </div>
  )
}
