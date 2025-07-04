import React from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './component/header/Header'
import Banner from './component/Home/banner/Banner'
import Home from './component/Home/banner/Home'
import Layout from './Layout'
import Footer from './component/footer/Footer'
import About from './About/About'
import Services from './serviceprovide/Services'
import Contact from './component/Contact/Contact'
function App() {


  return (


<>
<BrowserRouter>

<Header/>

<Routes>
   <Route path='/' element={<Home/>}></Route>
  <Route path='/home' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
  {/* <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/project' element={<Project/>}/> */}
</Routes>
<Footer></Footer>
</BrowserRouter>
</>

 
  )
}

export default App
