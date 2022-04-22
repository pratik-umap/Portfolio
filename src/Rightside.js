import React from 'react'
import './Rightside.css'
import { Link } from 'react-router-dom'
function Rightside() {
  return (
    <div className='rightside'>
        
        <div className='content'>
        <div className='main_image'>
           
        </div>
          <div className='main_info'>
           <h1>Pratik Umap</h1>
           <h3>I'm Frontend Developer. I craft user interface<br></br> using modern frontend web technologies.</h3>
          </div>
           <div className='social_media'>
             <ul>
               <li>
                 <a href='https://www.facebook.com/profile.php?id=100080216476957' target="_blank"><img className='social_img' src="https://cdn-icons-png.flaticon.com/128/1077/1077041.png" ></img></a>
               </li>
               <li>
                 <a href='https://www.instagram.com/pratik_13_/' target="_blank"><img className='social_img' src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png" ></img></a>
               </li>
               <li>
                 <a href='https://www.linkedin.com/in/pratik-umap-5a3738237/' target="_blank"><img className='social_img' src="https://cdn-icons-png.flaticon.com/128/1077/1077043.png" ></img></a>
               </li>
               <li>
                 <a href='https://twitter.com/pratik_umap' target="_blank"><img className='social_img' id='last_img' src="https://cdn-icons-png.flaticon.com/128/1077/1077032.png" ></img></a>
               </li>
             </ul>
           </div>
           <Link to="/About">
           <a href='#'> <button className='btn'>Download CV</button>
           </a>
           </Link>
        </div>
        

    </div>
  )
}

export default Rightside