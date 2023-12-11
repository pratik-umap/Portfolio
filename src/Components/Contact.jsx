import React, { useRef } from "react";
import "../style/Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ngb9ky",
        "template_6uyinee",
        form.current,
        "lc9aMTuyxUBJTA4h9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div className="contact">
      <div className="contact-section">
        <div className="contact_title">
          <h3>Get in touch</h3>
          <p>
            We are happy to answer any questions you have or provide you with an
            estimate. Just send us message in the form with any question you may
            have.
          </p>
        </div>

        <div className="contact_main">
          <div className="contact_left">
            <div className="Contact_part">
              <div className="title">
                <p>
                  I'm always open to discussing product<br></br>
                  <span> design work.</span>
                </p>
              </div>
              <div className="fields">
                <form className="contact_form" ref={form} onSubmit={sendEmail}>
                  <div className="first_row">
                    <input
                      name="name"
                      type="text"
                      placeholder="Name *"
                      required
                    />
                  </div>

                  <div className="second_row">
                    <input
                      name="user_email"
                      type="email"
                      placeholder="Email *"
                      required
                    />
                  </div>

                  <div className="third_row">
                    <textarea name="message" placeholder="Message *"></textarea>
                  </div>

                  <div className="contact_btn">
                    <button type="submit" className="color">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
