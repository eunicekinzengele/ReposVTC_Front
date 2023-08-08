import React from 'react'
import Topbar from '../components/layout/Topbar'
import HeroBarLocation from '../pages/HeroBarLocation'
import DescriptionLocation from './DescriptionLocation'
import FleetOfVehicles from './FleetOfVehicles'
import Footer from './Footer'
import Header2 from './Header2'

export default function Home2() {
  return (
    <>
       <Topbar/>
       <Header2/>
       <HeroBarLocation/>
       <DescriptionLocation/>
       <FleetOfVehicles/>
       <Footer/>
    </>
  )
}
