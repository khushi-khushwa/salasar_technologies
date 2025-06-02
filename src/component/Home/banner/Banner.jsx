import React from 'react'
import './Banner.css'
import { Link, Outlet } from 'react-router-dom'
const Banner = () => {
   
    const  heading=[
        {head:'Custom Software Development', img: '/images/feature/feat-1.png', alt: 'images1'},
          {head:'Web & Mobile App Solutions', img: '/images/feature/feat-2.png', alt: 'images2'},
          {head:' Tech Support & Maintenance', img:'/images/feature/feat-3.png', alt: 'images3'},
     ]

     function sds(){
     console.log('afdg')
     }
  return (
  <>
        <section className="main-banner-area  main-banner-area-two">
    <div className="container-fluid">
      <div className="row d-flex">
        <div className="col-lg-6">
          <div className="banner-text">
              <h1>Crafting Smart Software, Driving Real Results</h1>
            <p>We specialize in crafting custom software, web applications, and scalable digital solutions that drive growth and
               transform businesses.</p>
            <div className="banner-btn">
              <Link className="default-btn" to="/services">
                Learn More
              </Link>
              < Link className="default-btn" to="/contact" onClick='sds()'>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="banner-main-img ">
            <img src="images/banner/banner-two-main-img.png"/>
          </div>
          <div className="banner-img">
            <img className="wow fadeInDown animated" data-wow-delay=".1s" alt="Image" data-cfsrc="images/banner/1.png"
              src="images/banner/1.png" style={{visibility: 'visible', animationDelay: '0.1s'}}/>
            <div className="wow fadeInDown animated" data-wow-delay=".3s"
              style={{visibility: 'visible', animationDelay: '0.3s'}}>

              <div className="square-img">
                <img className="wow fadeInDown animated" data-wow-delay=".3s" alt="Image" data-cfsrc="images/banner/2.png"
                  src="images/banner/2.png" style={{visibility: 'visible', animationDelay: '0.3s'}}/>
              </div>
            </div>


            <img className="wow fadeInDown animated" data-wow-delay=".6s" alt="Image" data-cfsrc="images/banner/3.png"
              src="images/banner/3.png" style={{visibility: 'visible', animationDelay: '0.6s'}}/>

            <div className="wow zoomIn animated" data-wow-delay=".9s" style={{visibility: 'visible', animationDelay: '0.9s'}}>
              <div className="circle-img">
                <img alt="Image" data-cfsrc="images/banner/4.png" src="images/banner/4.png"/>
              </div>
            </div>

            <img alt="Image" data-cfsrc="images/banner/5.png" src="images/banner/5.png"/>
            <img className="wow fadeInDown animated" data-wow-delay=".6s" alt="Image" data-cfsrc="images/banner/6.png"
              src="images/banner/6.png" style={{visibility: 'visible', animationDelay: '0.6s'}}/>

            <img className="wow fadeInDown animated" data-wow-delay=".6s" alt="Image" data-cfsrc="images/banner/7.png"
              src="images/banner/7.png" style={{visibility: 'visible', animationDelay: '0.6s'}}/>

            <img className="wow fadeInRight animated" data-wow-delay=".9s" alt="Image" data-cfsrc="images/banner/8.png"
              src="images/banner/8.png" style={{visibility: 'visible', animationDelay: '0.9s'}}/>

            <img className="wow fadeInRight animated" data-wow-delay=".9s" alt="Image" data-cfsrc="images/banner/9.png"
              src="images/banner/9.png" style={{visibility: 'visible', animationDelay: '0.9s'}}/>



            <img className="wow fadeInRight animated" data-wow-delay="1s" alt="Image" data-cfsrc="images/banner/10.png"
              src="images/banner/10.png" style={{visibility: 'visible', animationDelay: '1s'}}/>
          
          </div>
        </div>
       
      </div>
    </div>

    <div className="over-shape">
      <img src="images/banner/over.png" alt="Image" />
      <img src="images/banner/over2.png" alt="Image"/>
      <img src="images/banner/over3.png" alt="Image"/>
    </div>
  </section>
   <div className="feature-section">
          <div className="container">
                 <div className="row gx-4 gy-4">
                    {heading.map((item, index) => (
                        <div key={index} className="col-md-6 col-lg-6 col-xl-4 col-sm-12 first-item">
                            <div className="feature-item d-flex shadow justify-content-center align-items-center">
                                <div className="feature-icon">
                                    <img src={item.img} alt={item.alt} />
                                </div>
                                <div className="feature-content ms-4">
                                    <h4 className="title">
                                        {item.head}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
        </div>
  
    </>
  )
}

export default Banner
