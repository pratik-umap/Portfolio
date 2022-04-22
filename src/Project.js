import React from 'react'
import './Project.css'

function Project(props) {
  return (
    <div className='project'>
        
        <div className='project_section'>
             <div className='project_1' >
                <div className='project_card'>
                  <div className='project_title'>
                     <h3>{ props.name }</h3>
                  </div>
                  <div className='project_img'>
                    <img className='img' src={ props.image }></img>
                  </div>
                  <div className='project_lang'>
                    <p>{ props.lang }</p>
                  </div>
                  <div className='project_btn'>
                    <a href={ props.websrc } target='_blank'>
                    <button>View Page</button>
                    </a>
                  </div>
                </div>
             </div>
             
        </div>
    </div>
  )
} 

export default Project