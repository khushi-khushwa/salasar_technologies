import React from 'react'
import { Header } from './component/header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
   <Header/>
   <main>
    <Outlet>
    </Outlet>
   </main>
    </>
  )
}

export default Layout
