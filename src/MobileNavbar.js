import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './MobileNavbar.css';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function MobileNavbar() {
      const[open,setOpen]=useState(false);

   const myFunction = () =>{
     setOpen(prev => !prev);
    var x= document.getElementById('leftside_bar');
      if(x.style.display==='block'){
        x.style.display='none';
      }else{
        x.style.display='block';
      }

   }

  return (
    <div className='mobile_nav'>
      <div className='header'>
          <h3>PrAt!K</h3>

         <div className='mob-header'>
          <div className='toggle-menu' onClick={myFunction}>
            {open ? <CloseRoundedIcon id='close-btn' /> : <MenuRoundedIcon id='menu-btn' />} 
          </div>
       </div>
 
      </div>

         <div className='leftside_bar' id='leftside_bar'>
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

export default MobileNavbar