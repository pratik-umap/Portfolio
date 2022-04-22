
import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import './Navbar.css'
import Rightside from './Rightside'


function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside_bar'>
          <h2>PrAt!K</h2>
          
          <div className='sidebar_menu'>
              <ul className='sidebar_list'>
                 <Link to='/'  style={{textDecoration:'none'}} >
                  <li className='inner-list'>
                  <img  src="http://edinareact.ibthemespro.com/img/svg/home.svg" alt="icon" />
                    <h3>Home</h3>
                  </li>
                  </Link>
                   
                   <Link to="/About" style={{textDecoration:'none'}} >
                  <li className='inner-list'>
                  <img  src="http://edinareact.ibthemespro.com/img/svg/human.svg" alt="icon" />
                  < h3>About</h3>
                  </li>
                  </Link>
                  <Link to="/Skill" style={{textDecoration:'none'}} >
                  <li className='inner-list'>
                  <img src="http://edinareact.ibthemespro.com/img/svg/service.svg" alt="icon" />
                  < h3>Skill</h3>
                  </li>
                  </Link>

                  <Link to="/Project" style={{textDecoration:'none'}} >
                  <li className='inner-list'>
                  <img src="http://edinareact.ibthemespro.com/img/svg/portfolio.svg" alt="icon" />
                  < h3>Project</h3>
                  </li>
                  </Link>

                  <Link to="/Contact" style={{textDecoration:'none'}} >
                  <li className='inner-list'>
                  <img src="http://edinareact.ibthemespro.com/img/svg/contact.svg" alt="icon" />
                  < h3>Contact</h3>
                  </li> 
                  </Link>

              </ul>

          </div>
         
          <div className='leftside_support'>
             <div className='inner_support'>
                
                <div className='image'>

                </div>
                <div className='info'>
                  <h3>Pratik</h3>
                  <h4>support@gmail.com</h4>
                </div>
             </div>
          </div>
  
      </div>
     

    </div>
  )
}

export default Navbar