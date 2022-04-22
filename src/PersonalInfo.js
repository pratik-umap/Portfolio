import './PersonalInfo.css'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
function Personal() {
    return(
        <div className="personal">
           <h3>Peronal Info</h3>

            <div className='personal_content'>
                <ul className='content_list_1'>
                   <li>First Name: <span>Pratik</span></li>
                   <li>Age: <span>21 Years</span></li>
                   <li>Phone: <span>+123456789</span></li>
                   <li>Language: <span>English</span></li>
                </ul>
                <ul className='content_list_2'>
                    <li>Last Name: <span>Umap</span></li>
                    <li>Nationality: <span>Indian</span></li>
                    <li>Email: <span>you@gmail.com</span></li>
                </ul>
            </div>
            <div className='education_info'>
              <h3>Education</h3>
              <ul className='education_list'>
                <li className='education_sublist'>
                    <div className='education_icon'>
                        <img src='http://edinareact.ibthemespro.com/img/about/book.png'></img>
                    </div>
                    <div className='education_name'>
                       <h3>Bachelor of Engineering, Computer Engg</h3>
                       <h5>ISB&M School of Technology, Pune, India</h5>
                       <div className='education_date'>
                           <CalendarTodayIcon  id='cal_logo'/>
                           <h5>Aug 2019 - Jun 2023 (Expected)</h5>
                       </div>
                    </div>
                </li>

                <li className='education_sublist'>
                    <div className='education_icon'>
                        <img src='http://edinareact.ibthemespro.com/img/about/book.png'></img>
                    </div>
                    <div className='education_name'>
                       <h3>Higher Secondary Education</h3>
                       <h5>MIT, Pune, India</h5>
                       <div className='education_date'>
                           <CalendarTodayIcon  id='cal_logo'/>
                           <h5>Aug 2017 - Jun 2019 </h5>
                       </div>
                    </div>
                </li>

              </ul>
              </div>
              <div className='back_button'>
               <Link to="./About">
                <div className='back_btn'>
                  <ArrowBackIcon  id='back'/>
                </div>
               </Link>
              </div>  
        </div>
    )

}

export default Personal