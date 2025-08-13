import React from 'react'
import './Footer.css'
import { Link, useLocation } from 'react-router-dom'
const Footer = () => {

  const location = useLocation();
 const isContactpage = location.pathname === '/' || location.pathname === '/home';

 const contacts = [
    {head:'Call Us Now', text:'+91 7011230208', icon:'fa-solid fa-phone'},
        {head:'Email Address', text:'khushikhushwah70@gmial.com', icon:'fa-regular fa-envelope'},
            {head:'Address', text:'Gurgaon Haryana', icon:'fa-solid fa-location-dot'},
  ]

  function ads(){
     console.log("Clicked");
  }
  return (
 <>
   {/* <!-- FOOTER --> */}
  <footer className="footer">
    <div className="container">
      <div className={`row d-flex  footer ${isContactpage ? 'main-footer':'my-footer'}`} >
        <div className="col-lg-3  col-sm-6 col-md-6">
          <img src="./images/logo/salasar-logo.png" />

          <p className="mt-3 mb-3 first-p" style={{color: 'white'}}>Salasar Technologies is a versatile IT company that specializes in providing
             a wide range of communication and information technology solutions.</p>
         
            <div className='follow-icon'>

            <p className="text-white">Follow Us</p>
            <div className="d-flex media-icon">
              {/* <a><i className="fa-brands fa-twitter"></i></a> */}
              <a><i className="fa-brands fa-instagram"></i></a>
              <a><i className="fa-brands fa-facebook"></i></a>
              <a><i className="fa-brands fa-linkedin"></i></a>
            </div>
          

          </div>
        </div>


        <div className="col-lg-3 col-sm-6  footer-ul">

          <div className="footer-list footer-university ">
            <div className="service-title ">
              <h3 className="text-white">Services</h3>
              <div className=" "
                style={{height:'0.1rem' , width: '10rem' ,  backgroundColor: '#1dd3f8' , marginBottom: '1.4rem'}}></div>

            </div>
            <div className="fw-link">
              <ul>
                <li>
                  <a href="#">Web development</a>
                </li>
                <li><a href="#">Mobile Development</a></li>
                <li><a href="#">Graphic Design</a></li>
                <li><a href="#">SEO & SEM</a></li>
                <li><a href="#">Video Editing</a></li>
              </ul>
            </div>

          </div>
        </div>

        <div className="col-lg-3 col-sm-6   footer-ul">
          <div className="footer-list footer-link  ">
            <div className="fw-title  ">
              <h3 className="">Links</h3>
              <div className=" "
                 style={{height:'0.1rem' , width: '9rem' ,  backgroundColor: '#1dd3f8' , marginBottom: '1.4rem'}}></div>
            </div>
       <div className="fw-link">
      <ul>
        <li>
          <Link to="/home" onClick={() => console.log("Navigating to Home")}>
            Home
          </Link>
        </li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 footer-ul ">

          <div className="footer-list footer-contact">
            <div className="contact-title ">
              <h3>Contact</h3>
              <div className=""
               style={{height:'2px' , width: '10rem' ,  backgroundColor: '#1dd3f8' , marginBottom: '1rem'}}></div>
            </div>
            <div className="fw-link  ">
               <ul>
              {
                contacts.map((item, i) =>(

                <li key={i}>
                  <div className="d-flex mt-0">
                    <div className=" me-3 footer-icon mt-3 ">
                      <i className={item.icon}></i>
                    </div>
                    <div className="px-5 ">
                      <p className="text-white mb-0 ">{item.head}</p>
                      <a>{item.text}</a>
                    </div>
                  </div>
                </li>
              
                )

                )
                 
              }
              </ul>
             
            </div>
          </div>

        </div>
        {/* <!-- <div className="hr-line"></div> --> */}
        <hr className="hr-line" />
      </div>

    </div>
    <img src="images/footer/service_bg_shapes.png" className="line-img" />
    <div className="spinning-circle-bottom blurs-circle"></div>
  </footer>

 </>
  )
}

export default Footer
