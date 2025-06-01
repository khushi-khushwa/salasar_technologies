import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
   <>
    {/* <!-- banner of contact section --> */}

  <div class="contact-banner">
    <div className="shape-svg">
  <svg id="svg" viewBox="0 0 400 28" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path 
      d="M0 13.854V28h400V14.216V0.725l-4.427 1.097c-73.561 18.242-154.331 27.421-216.864 24.645C123.876 24.033 57.451 14.315 4.123 0.926 2.094 0.417 0.336 0 0.217 0 0.069 0 0 4.399 0 13.854Z" 
      fill="white" 
    />
  </svg>
</div>

   
    <div class="container-fluid" >
      <div class="row">
          <div class="col-md-12">
            <div class="contact-banner-info">
             
              <h1 class="text-white">CONTACT US</h1> 
              <p>Feel free to contact with us</p>

            </div>
            
          </div>
      </div>
    </div>
  </div>

  {/* <!-- banner end --> */}

  <div class="contact-full-info">
    <div class="container">
      <div class="row gy-5">
        <div class="col-md-4 col-sm-12 col-lg-4">
            <div class="info shadow">
              {/* <!-- <i class="ti-location-pin"></i> --> */}
              <div class="contact-icon ">
              <i class="fa-solid fa-location-dot"></i>
              </div>
              
              <div class="detail">
                <h3>Our Location</h3>
                <p class="text-center mt-0 ">The Queen's Walk, Bishop's,  United Kingdom</p>
              </div>
             
            </div>
        </div>
        <div class="col-md-4 col-sm-12 col-lg-4">
          <div class="info shadow">
            <div class="contact-icon">
            <i class="fa-solid fa-headset"></i>
            </div>
 
          <div class="contact-detail">
            <h3>Our Contact</h3>
            <p>+ (567) 1234-567-8900</p>
             <p> + (567) 1234-567-8901</p>
          </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 col-lg-4">
          <div class="info shadow">
            <div class="contact-icon">
            <i class="fa-regular fa-envelope"></i>
            </div>
            <div class="contact-detail">
              <h3>Mail Us</h3>
             <p>info@peacefulthemes.com</p>
             <p>info2@peacefulthemes.com</p>
            </div>
          </div>
      

        </div>
      </div>
    </div>
  </div>

{/* <!--  form in contact page 1--> */}


<div class="get-touch ">
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xl-6">
       <div class="img-in-form d-lg-flex justify-content-center ">
        <img src="images/contact/contact-img.png" />
       </div>
      </div>

      <div class="col-md-12 col-lg-12 col-xl-6">

 <div class="contact-form ">
    <h1>Get in touch</h1>
 
{/* <!--     
    <div class="col-lg-8 col-md-12"> --> */}
      <div class="row row-border">
        <div class="col-md-12 ">
          <form class=" get-touch-form">
            <div class="upper-input mb-3 d-md-flex">
             
              <input type="text" name="name" id="name" value="" class="name shadow-sm " placeholder="Name:" />
             
              <input type="text" name="email" id="email" value="" class="email shadow-sm" placeholder="Email:"/>
            </div>

            <div class="bottom-input mb-3 d-md-flex">
              <input type="text" name="subject" id="subject" value="" class="subject shadow-sm" placeholder="Subject:"/>
              <input type="text" name="phone" id="phone" value="" class="phone shadow-sm" placeholder="Phone:"/>
            </div>

            <div class="message-wrap">
              <textarea name="message"   id="comment-message" rows="7"   class="shadow-sm" placeholder="Message" required="required"></textarea>
        
          </div>
          <div class="fl-btn btn-linear linear-color-one mb-3">
            <button name="submit" type="submit" class="submit btn-contact hv-linear border-corner" id="submit">contact today</button>
        </div>
         
          </form>
 </div>

      </div>
    </div>
  </div>
</div>
</div>
</div>

   </>
  )
}

export default Contact
