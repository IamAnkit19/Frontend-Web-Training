import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import ContactUs from './ContactUs'
import './App.css'

const App = () => {
  return (
    <div id='appDiv'>
      <nav id='navBar'>
        <ul id='navUl'>
          <Link to={"/"} style={{ textDecoration: 'none' }}>
            <li>Home</li>
          </Link>
          <Link to={"/about"} style={{ textDecoration: 'none' }}>
            <li>About</li>
          </Link>
          <Link to={"/services"} style={{ textDecoration: 'none' }}>
            <li>Services</li>
          </Link>
          <Link to={"/contactus"} style={{ textDecoration: 'none' }}>
            <li>Contact Us</li>
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
      </Routes>
    </div>
  )
}

export default App