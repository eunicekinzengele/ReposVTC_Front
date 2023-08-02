import React from 'react'
import Topbar from '../components/layout/Topbar'
import Banner from './Banner'
import CarsRetails from './CarsRetails'
import Header from './Header'

export default function RetailsCarPage() {
  return (
    <div>
        <Topbar/>
        <Header/>
        <Banner/>
        <CarsRetails/>
    </div>
  )
}
