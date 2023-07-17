import React from 'react'
import Topbar from '../components/layout/Topbar'
import FleetOfVehicles from './FleetOfVehicles'
import Footer from './Footer'
import Header from './Header'
import HeroBar from './HeroBar'

export default function Home() {
  return (
    <>
       <Topbar/>
       <HeroBar/>
       <FleetOfVehicles/>
       <Footer/>
    </>
  )
}
