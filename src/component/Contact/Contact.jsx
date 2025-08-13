import { useState } from 'react'
import axios from 'axios';
import './Contact.css'
const Contact = () => {
  const [formvalue, setFormvalue] = useState({
      name: '',
      email: '',
      subject: '',
      phone: '',
      textbox: '',
    });
  
     function changevalue(e) {
        const { name, value } = e.target;
        setFormvalue((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    
      async function submitForm(e) {
        e.preventDefault();
       console.log(formvalue);
         try{
    
           const res = await axios.post("http://localhost:8080/salasar/contact",formvalue);
           alert(res.data.message || 'Form submitted successfully!');
           setFormvalue({ name: '', email: '', subject: '', phone: '', textbox: '' });
         }catch(error){
             console.error('Error submitting form:', error);
          alert('Something went wrong, please try again.');
         }
      }
  return (
   <>
    {/* <!-- banner of contact section --> */}

  <div className="contact-banner">
    <div className="shape-svg">
  <svg id="svg" viewBox="0 0 400 28" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path 
      d="M0 13.854V28h400V14.216V0.725l-4.427 1.097c-73.561 18.242-154.331 27.421-216.864 24.645C123.876 24.033 57.451 14.315 4.123 0.926 2.094 0.417 0.336 0 0.217 0 0.069 0 0 4.399 0 13.854Z" 
      fill="white" 
    />
  </svg>
</div>

   
    <div className="container-fluid" >
      <div className="row">
          <div className="col-md-12">
            <div className="contact-banner-info">
             
              <h1 className="text-white">CONTACT US</h1> 
              <p>Feel free to contact with us</p>

            </div>
            
          </div>
      </div>
    </div>
  </div>

  {/* <!-- banner end --> */}

  <div className="contact-full-info">
    <div className="container">
      <div className="row gy-5">
        <div className="col-md-4 col-sm-12 col-lg-4">
            <div className="info shadow">
              {/* <!-- <i className="ti-location-pin"></i> --> */}
              <div className="contact-icon ">
              <i className="fa-solid fa-location-dot"></i>
              </div>
              
              <div className="detail">
                <h3>Our Location</h3>
                <p className="text-center ">Gurgaon Haryana </p>
                <p className='mt-0'>India</p>
              </div>
             
            </div>
        </div>
        <div className="col-md-4 col-sm-12 col-lg-4">
          <div className="info shadow">
            <div className="contact-icon">
            <i className="fa-solid fa-headset"></i>
            </div>
 
          <div className="contact-detail">
            <h3>Our Contact</h3>
            <p>+91 7011230208</p>
             <p>+91 9205247324</p>
          </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-lg-4">
          <div className="info shadow">
            <div className="contact-icon">
            <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="contact-detail">
              <h3>Mail Us</h3>
             <p>khushikhushwah70@gmail.com</p>
             <p>salasartechnologies80@gmail.com</p>
            </div>
          </div>
      

        </div>
      </div>
    </div>
  </div>

{/* <!--  form in contact page 1--> */}


<div className="get-touch ">
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-lg-12 col-xl-6">
       <div className="img-in-form d-lg-flex justify-content-center ">
        <img src="contactimage.jpg" />
       </div>
      </div>

      <div className="col-md-12 col-lg-12 col-xl-6">

 <div className="contact-form ">
    <h1>Get in touch</h1>
 
{/* <!--     
    <div className="col-lg-8 col-md-12"> --> */}
      <div className="row row-border">
        <div className="col-md-12 ">
          <form className=" get-touch-form" onSubmit={submitForm}>
            <div className="upper-input mb-3 d-md-flex">
             
              <input type="text" name="name" id="name"  value={formvalue.name}
                      onChange={changevalue}className="name shadow-sm " placeholder="Name:" />
             
              <input type="text" name="email" id="email"  value={formvalue.email}
                      onChange={changevalue} className="email shadow-sm" placeholder="Email:"/>
            </div>

            <div className="bottom-input mb-3 d-md-flex">
              <input type="text" name="subject" id="subject" value={formvalue.subject}
                      onChange={changevalue} className="subject shadow-sm" placeholder="Subject:"/>
              <input type="text" name="phone" id="phone"  value={formvalue.phone}
                      onChange={changevalue} className="phone shadow-sm" placeholder="Phone:"/>
            </div>

            <div className="message-wrap">
              <textarea name="textbox"   value={formvalue.textbox}
                      onChange={changevalue}  id="comment-message" rows="7"   className="shadow-sm px-2 py-2" placeholder="Message" required="required"></textarea>
        
          </div>
          <div className="fl-btn btn-linear linear-color-one mb-3">
            <button name="submit" type="submit" className="submit btn-contact hv-linear border-corner" id="submit">contact today</button>
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
