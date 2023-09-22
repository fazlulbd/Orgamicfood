import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Manubar from './Manubar'

const Layout = () => {
  return (
    <>
    <Manubar/>
    <main style={{minHeight:"60vh"}}>
     <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout
