import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
// import './App.css'

const App = () => {
  return (
    <div id='appDiv'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>}></Route> */}
      </Routes>
    </div>
  )
}

export default App