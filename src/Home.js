import React from 'react'
import './Home.css'
import MobileNavbar from './MobileNavbar'
import Navbar from './Navbar'


function Home() {

  return (
    <div className='home'>
  
      <Navbar />
      <MobileNavbar />

   </div> 
  )
}

export default Home