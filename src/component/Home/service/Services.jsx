import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'
const Services = () => {

     const services=[
        {name:'Custom Software Development', src:"images/services/service1.png" , text:'Tailored solutions that fit your business like a glove.'},
        {name:' Graphic Design', src:"images/services/service2.png",  text:'Creative, brand-driven visuals for web, print, and digital platforms.'},
        {name:'Search Engineer Optimization', src:"images/services/service3.png", text:'Drive traffic and rank higher on Google with powerful SEO.'},
        {name:'UI/UX Design', src:"images/services/service4.png", text:'Designs that are intuitive, interactive, and user-focused.'},
        {name:'Web Application Development', src:"images/services/service5.png", text:'Designs that are intuitive, interactive, and user-focused.'},
        {name:'Video Editing', src:"images/services/service6.png", text:'High-impact video editing for engaging, polished, and professional content.'},
     ]
  return (
 <>

   {/* <!-- service section --> */}
  <div className="services-section">

    <img src="images/services/1.png" alt="box-img" className="bottom-img" />
    <img src="images/services/2.png" alt="box-img" className="upper-img" />


    <div className="container">
      <h1 className="text-center mb-5"> Our Core Services</h1>

      <div className="row  px-5 pt-5">
        {
            services.map((item,index) =>(
                  <div  key={index} className="col-sm-12 col-md-6 col-lg-6 col-xl-4  ">

          <div className="shadow px-4 mb-4 services-info">
            <div className="icon-one"></div>
            <div className="icon-two" style={{ backgroundImage:'url(images/services/icon-2.png)' }}></div>
            <div className="icon-three" style={{ backgroundImage: 'url(images/services/icon-4.png' }}></div>
            <div className="icon-four" style={{ backgroundImage: 'url(images/services/icon-19.png)' }}></div>

            <img className='pb-2' src={item.src} style={{width: '5rem'}}/>

            <h5>{item.name}</h5>
            <p className="text-center ">{item.text}</p>
            <Link to="/services" className="btn-hover"><i className="fa-solid fa-greater-than"></i></Link>
          </div>
        </div> 
            ))
        }
        </div>
        </div>
      </div> 
 
  {/* <!-- services end --> */}
 </>
  )
}

export default Services
