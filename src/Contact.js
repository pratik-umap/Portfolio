import React,{useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7ngb9ky', 'template_6uyinee', form.current, 'lc9aMTuyxUBJTA4h9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <div className='contact'>
       <div className='contact_title'>
           <h3>Contact</h3>
           <p>We are happy to answer any questions you have or provide you with an estimate. Just send us message in the <br></br> form below with any question you may have.</p>
       </div>

       <div className='contact_support'>
       <div className='contact_info'>
           <div className='icon'>
               <img src='http://edinareact.ibthemespro.com/img/address/phone.png'></img>
           </div>
           <div className='contact_content'>
               <h3>Phone</h3>
               <h4>1234567890</h4>
               <h4>1234567890</h4>
           </div>
         </div>
         <div className='contact_info'>
           <div className='icon'>
               <img src='http://edinareact.ibthemespro.com/img/address/email.png'></img>
           </div>
           <div className='contact_content'>
               <h3>Email</h3>
               <h4>support@gmail.com</h4>
               <h4>example2support.com</h4>
           </div>
         </div>
         <div className='contact_info'>
           <div className='icon'>
               <img src='http://edinareact.ibthemespro.com/img/address/location.png'></img>
           </div>
           <div className='contact_content'>
               <h3>Address</h3>
               <h4> kothrud pune,</h4>
               <h4>Maharashtra, India</h4>
           </div>
          </div>
        </div>

       <div className='contact_main'>

        <div className='contact_left'>

        <div className="Contact_part">
            <div className="title">
                <p>I'm always open to discussing product<br></br>
                <span> design work or partnerships.</span>
                </p>
                </div>
                <div className="fields">
                  <form  className="contact_form" ref={ form } onSubmit={sendEmail}>
                    
                    <div className="first_row">
                       <input name="name" type="text" placeholder="Name *" required />
                     </div>

                     <div className="second_row">
                         <input name="user_email" type="email" placeholder="Email *" required/>
                      </div>

                    <div className="third_row">
                       <textarea name="message" placeholder="Message *"></textarea>
                    </div>

                    <div className="contact_btn">
                       <button type='submit' className="color">Submit</button>
                    </div>
                 </form>
                </div>
              </div>

        </div>

       </div>

    </div>
  )
}

export default Contact