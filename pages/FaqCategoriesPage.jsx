import React from 'react'
import Topbar from '../components/layout/Topbar'
import FaqCategories from './FaqCategories'
import Footer from './Footer'
import Header from './Header'

export default function FaqCategoriesPage() {
  return (
    <div>
        <Topbar/>
        <Header/>
        <FaqCategories/>
        <Footer/>
    </div>
  )
}
