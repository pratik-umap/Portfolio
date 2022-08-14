import React from 'react'
import './Skill.css'

function Skill() {
 let arr=[
    {
      width:"90%"
    },
    {
      width:"85%"
    },
    {
      width:"65%"
    },
    {
      width:"55%"
    },
    {
      width:"70%"
    },
    {
      width:"45%"
    },
    {
      width:"90%"
    },
    {
      width:"70%"
    }
 ]
  return (
    <div className='skill'>
        <div className='skill_content'>
            <h3>Coding Skill</h3>

            <p>
              This is my skill section. Below is a quick overview of my main technical skill sets.
            </p>
        </div>

        <div className='progress_bar'>
          <div className='progress_inner'>
            <span className='label'>HTML5</span>
            <div className='background'>
              <div className='bar'>
                 <div className="bar_inner" style={arr[0]}>

                 </div>
              </div>
            </div>
          </div>

          <div className='progress_inner'>
            <span className='label'>CSS3</span>
            <div className='background'>
              <div className='bar'>
                 <div className='bar_inner' style={arr[1]}>

                 </div>
              </div>
            </div>
          </div>

          <div className='progress_inner'>
            <span className='label'>Java Script</span>
            <div className='background'>
              <div className='bar'>
                 <div className='bar_inner' style={arr[2]}>

                 </div>
              </div>
            </div>
          </div>

          <div className='progress_inner'>
            <span className='label'>React JS</span>
            <div className='background'>
              <div className='bar'>
                 <div className='bar_inner' style={arr[3]}>

                 </div>
              </div>
            </div>
          </div>


          <div className='progress_inner'>
            <span className='label'>JAVA</span>
            <div className='background'>
              <div className='bar'>
                 <div className='bar_inner' style={arr[4]}>

                 </div>
              </div>
            </div>
          </div>

          <div className='progress_inner'>
            <span className='label'>C++ / Python</span>
            <div className='background'>
              <div className='bar'>
                 <div className='bar_inner' style={arr[5]}>

                 </div>
              </div>
            </div>
          </div>

          <div className='progress_inner'>
            <span className='label'>Bootstrap</span>
            <div className='background'>
              <div className='bar'>
                 <div className='bar_inner' style={arr[6]}>

                 </div>
              </div>
            </div>
          </div>

          <div className='progress_inner'>
            <span className='label'>Node JS</span>
            <div className='background'>
              <div className='bar'>
                 <div className='bar_inner' style={arr[7]}>

                 </div>
              </div>
            </div>
          </div>

        </div>

        
    </div>
  )
}

export default Skill