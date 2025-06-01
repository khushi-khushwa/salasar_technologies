import React from 'react'
import './Banner.css'
const Banner = () => {
  const   about = [
        {name:'Innovation at Core', text:'We embrace new technologies to build smarter, future-ready solutions.',icon:"fa-regular fa-gem"},
        {name:'Client-Centric Approach', text:'Your business goals are our top priority in every project we deliver.',icon:"fa-solid fa-dice-d20"},
        {name:'Commitment to Quality',  text:'We follow best practices to ensure high performance and reliability.', icon:"fa-solid fa-shield-halved"},
        {name:'Continuous Growth', text:'We evolve through learning, adapting, and striving for excellence.', icon:"fa-solid fa-globe"},
    ]
  return (
 <>

  <div className="about-section">
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
               
                <h1 className="text-white">ABOUT US</h1> 
                <p></p>
  
              </div>
              
            </div>
        </div>
      </div>
  </div>

    <div className="about-company">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-center">
                    <div className="about-company-info ">
                        <h1>About A Technologies – Innovating from the Heart of Salasar</h1>
                        <p>At A Technologies, we’re more than just a software company — we’re your technology partner. Based in Salasar, we specialize in creating reliable, scalable, and custom software solutions that drive real results. Our team of skilled developers, designers, and strategists is committed to turning your vision into digital reality, with a focus on innovation, quality, and long-term success.</p>
                    </div>

                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                   <div className="about-company-video ">
                 
                    <a href="https://www.youtube.com/watch?v=YLN1Argi7ik" className="popup-video  d-flex align-items-center justify-content-center" >
                        <i className="fa fa-play"></i>
                    </a>
             
                   </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- about company end --> */}
  <div className="passion-section">
      <div className="container">
        <div className="heading-passion text-center pb-5">
         
          <h1>Passion</h1>
          <p>  Driven by Passion, Powered by Purpose</p>
          
        </div>
         <div className="row gy-4 ">

            {
                about.map((item,index)=>(
 <div key={index} className="col-md-6 col-lg-3 col-sm-12 passion-detail">
                 <div className="it-design design shadow">
                  <div className="top-icon">
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
                  <h5>{item.name}</h5>
                  <p>{item.text}</p>
                  <div className="bottom-icon">
                    <i className={item.icon}></i>
                </div>
                </div>
            </div>
                ))
            }
           
            {/* <div class="col-md-6 col-lg-3 col-sm-12 passion-detail ">
              <div class="it-design manage shadow">
                <div class="top-icon">
                  <i class="fa-solid fa-arrow-right"></i>
              </div>
                <h5>IT MANAGEMENT</h5>
                <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, aliquid!</p>
                <div class="bottom-icon">
                  <i class="fa-solid fa-dice-d20"></i>
              </div>
               </div>
            </div>
            <div class="col-md-6 col-lg-3 col-sm-12 passion-detail ">
              <div class="it-design secure shadow">
                <div class="top-icon">
                  <i class="fa-solid fa-arrow-right"></i>
              </div>
                <h5>IT SECURITY</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, aliquid!</p>
                <div class="bottom-icon">
                  <i class="fa-solid fa-shield-halved"></i>
              </div>
               </div>
            </div>
            <div class="col-md-6 col-lg-3 col-sm-12 passion-detail ">
              <div class="it-design data-secure shadow">
                <div class="top-icon">
                  <i class="fa-solid fa-arrow-right"></i>
              </div>
                <h5>DATA SECURITY</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, aliquid!</p>
                <div class="bottom-icon">
                  <i class="fa-solid fa-globe"></i>
              </div>
               </div>
            </div> */}
         </div>
      </div>
    </div>
 </>
  )
}

export default Banner
