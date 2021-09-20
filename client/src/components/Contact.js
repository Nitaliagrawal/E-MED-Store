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
                <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="" />
                <div className="contact_info_contect" style={{marginLeft:'10px'}}>
                  <div className="contact_info_title">
                    Phone
                  </div>
                  <div className="contact_info_title">
                    +91 8849550613
                  </div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png" alt="" />
                <div className="contact_info_contect" style={{marginLeft:'10px'}}>
                  <div className="contact_info_title">
                    Email
                  </div>
                  <div className="contact_info_title">
                    abc@gmail.com
                  </div>
                </div>
              </div>
             <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png" alt="" />
                <div className="contact_info_contect" style={{marginLeft:'10px'}}>
                  <div className="contact_info_title">
                    Address
                  </div>
                  <div className="contact_info_title">
                     Tarsadi, Gujarat 394350
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
                      className="contact_form_name_input_field"
                      placeholder="Your Name" required />

                    <input type="Email" id="contact_form_Email"
                      className="contact_form_name_input_field"
                      placeholder="Your Email" required />

                    <input type="Phone" id="contact_form_Phone"
                      className="contact_form_name_input_field"
                      placeholder="Your Phone number" required />
                  </div>
                  <div className="contact_form_text mt-4">
                    <textarea className="text_field contact_form_message" placeholder="Message" id="" cols="30" rows="10"></textarea>
                  </div>
                  <div className="contact_form_button">
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
