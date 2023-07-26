import React from 'react'
import Topbar from '../components/layout/Topbar'
import HeroBarLocation from '../pages/HeroBarLocation'
import DescriptionLocation from './DescriptionLocation'
import FleetOfVehicles from './FleetOfVehicles'
import Footer from './Footer'
import Header from './Header'

export default function Home() {
  return (
    <>
       <Topbar/>
       <Header/>
       <HeroBarLocation/>
       <DescriptionLocation/>
       <FleetOfVehicles/>
       <Footer/>
    </>
  )
}
