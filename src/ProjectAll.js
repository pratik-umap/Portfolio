import React from 'react'
import Project from './Project'
import './ProjectAll.css'


function ProjectAll() {
    let arr=[
        {
            name:'Amazon Clone',
            image:'https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-amazon-512.png',
            lang:'React JS , Firebase',
            websrc:'https://clone-22ee4.web.app'
        },
        {
            name:'Music Web',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-WkH63xBfJGFBRb7wjpD35zOFIZGEINjs5QWtr2g8DLrxKUs7kBn2e_X3DfbiuQUOdII&usqp=CAU',
            lang:'HTML, CSS, Java Script',
            websrc:'https://pratik-umap.github.io/Musify/'
        },
        {
            name:'Weather Web',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58HIQc11qbTAqBshsEJQd7SZAj5jhjD_LLA&usqp=CAU',
            lang:'React JS,weather API',
            websrc:'https://pratik-umap.github.io/WeatherApp/'
        },
        {
            name:'Travel Web',
            image:'https://cdn.dribbble.com/users/60166/screenshots/11603032/media/b5785a0b8b6bc0426e1c7a761458c731.jpg?compress=1&resize=400x300',
            lang:'HTML, CSS',
            websrc:'https://clone-22ee4.web.app'
        },
    ];
  return (
    <div className='projectall'>

         <div className='project_name'>
           <h3>Project</h3>
        </div>

         <Project
          name={ arr[0].name }
          image={ arr[0].image }
          lang={ arr[0].lang }
          websrc={ arr[0].websrc } /> 
       
        <Project
          name={ arr[1].name }
          image={ arr[1].image }
          lang={ arr[1].lang }
          websrc={ arr[1].websrc } /> 

        <Project
          name={ arr[2].name }
          image={ arr[2].image }
          lang={ arr[2].lang }
          websrc={ arr[2].websrc } /> 

        <Project
          name={ arr[3].name }
          image={ arr[3].image }
          lang={ arr[3].lang }
          websrc={ arr[3].websrc } /> 

    </div> 
  )
}

export default ProjectAll