import React from 'react'
import Topbar from '../components/layout/Topbar'
import AllVehicles from './AllVehicles'
import Banner from './Banner'
import Header from './Header'

export default function ListOfVehiclesPage() {
  return (
    <div>
        <Topbar/>
        <Header/>
        <Banner/>
        <AllVehicles/>
    </div>
  )
}
