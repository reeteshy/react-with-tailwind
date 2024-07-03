import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <React.Fragment>
    <div className="w-full">
      <Header />
      <Outlet />
      <Footer />
      </div>
    </React.Fragment>
  )
}

export default MainLayout