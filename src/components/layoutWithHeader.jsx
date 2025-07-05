import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import Layout from './Layout' 
import { Outlet } from 'react-router-dom'
const LayoutWithHeader = () => {
  return (
    <div>
        <Header />
        <div className='container my-5'>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default LayoutWithHeader