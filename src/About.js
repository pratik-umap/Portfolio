import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <div className='about'>
        <div className='personal_title'>
        <h3>About Me</h3>
        </div>
       
       <div className='about_content'>

        <div className='about_left'>
         <h4>Hi, I'm <span> Pratik Umap</span></h4>

         <p>I am a frontend web developer from india.  I code and <br/> create web elements for amazing people around the<br/> world. I like work with new people. </p>
         
         <div className='about_button'>
         <Link to='./Personal'>
         <button className='about_btn'>More About Me</button> 
         </Link>
         </div>

         </div>
         
         <div className='about_right'>
            
         </div>
       </div>
    </div>
  )
}

export default About