import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              {/* phone number*/}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src="" alt="phone" />
                <div className="contact_info_contect">
                  <div className="contact_info_title">
                    phone
                  </div>
                  <div className="contact_info_title">
                    +91 8849550613
                  </div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src="" alt="Email" />
                <div className="contact_info_contect">
                  <div className="contact_info_title">
                    Email
                  </div>
                  <div className="contact_info_title">
                    abc@gmail.com
                  </div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src="" alt="Address" />
                <div className="contact_info_contect">
                  <div className="contact_info_title">
                    Address
                  </div>
                  <div className="contact_info_title">
                    Gopal Vidyanagar, Tarsadi, Gujarat 394350
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>



      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">
                  Get in Touch
                </div>
                <form id="contact_form">
                  <div className="contact_form_name d-flex justify-content-between align-items-between">
                    <input type="text" id="contact_form_name"
                      className="contact_form_name input field"
                      placeholder="Your Name" required="true" />

                    <input type="Email" id="contact_form_Email"
                      className="contact_form_Email input field"
                      placeholder="Your Email" required="true" />

                    <input type="Phone" id="contact_form_Phone"
                      className="contact_form_Phone input field"
                      placeholder="Your Phone number" required="true" />
                  </div>
                  <div className="contact_form_text mt-4">
                    <textarea className="text field contact_form_message"  placeholder="Message"  id=""  cols="30" rows="10"></textarea>
                  </div>
                  <div className="contact_form_button mt-4">
                    <button type="submit" className="button contact_submit_button"> 
                        send Message
                    </button>

                  </div>
                </form>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>

  )

}

export default Contact
