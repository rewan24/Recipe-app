// 

import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header' // لو عندك هيدر جاهز

const LayoutWithHeader = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {Header && <Header />}  {/* الهيدر لو موجود */}
      
      <main className="flex-grow-1">
        <Outlet />  {/* هنا كل الصفحات تتحط */}
      </main>

      <Footer />  {/* الفوتر دايمًا تحت */}
    </div>
  )
}

export default LayoutWithHeader