import React from 'react'
import './Form.css'
const Form = () => {
  
  const form = [
    {name:'Phone', contact:'+0092 796 568 124', icon:'fa fa-phone'},
     {name:'Email', contact:'support24@gmail.com', icon:'fa fa-envelope'},
      {name:'Address', contact:'839 Plymouth Rd.', icon:'fa fa-map-marker'},
 

  ]

  return (
    <>
   <div class="contact-section">
    <div class="container">
      <div class="row row-gap">
      
        <div class="col-md-12 col-lg-4">
          <div class="where-contact ps-md-5 ps-sm-5">
            <div class="mb-3 d-flex justify-content-center align-items-center">
            <h2>Contact Us</h2>
            </div>
            <div class="contact-info ">
              {
                form.map((item,index)=>(
 <div class="d-flex">
                <div class="icon">
                  <i class={item.icon} aria-hidden="true"></i>
                </div>
                <div class="content-info ms-3">
                  <h5 class="ct-by">{item.name}</h5>

                  <p>{item.contact}</p>

                </div>
              </div>
                ))
              }
             
              
            </div>
          </div>

      
        </div>

        <div class="col-lg-8 col-md-12">
          <div class="row">
            <div class="col-md-12 ">
              <form class="ps-md-5 ps-sm-5 ">
                <div class="upper-input mb-3 d-md-flex">
                 
                  <input type="text" name="name" id="name" value="" class="name shadow-sm " placeholder="Name:" />
                 
                  <input type="text" name="email" id="email" value="" class="email shadow-sm" placeholder="Email:" />
                </div>
    
                <div class="bottom-input mb-3 d-md-flex">
                  <input type="text" name="subject" id="subject" value="" class="subject shadow-sm" placeholder="Subject:" />
                  <input type="text" name="phone" id="phone" value="" class="phone shadow-sm" placeholder="Phone:" />
                </div>
   
                <div class="message-wrap">
                  <textarea name="message"   id="comment-message" rows="8"   class="shadow-sm" placeholder="Message" required="required"></textarea>
            
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
    </>
  )
}

export default Form
