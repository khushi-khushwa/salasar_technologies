import React from 'react'
import Slider from 'react-slick';
import './Logosection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Logosection = () => {
      const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const images=[
    {
        img:"/images/logo/ascletter.jpg", className:'ascletter'
    },
     {
        img:"/images/logo/ascdiamond.jpg", className:"ascdiamond"
    },
     {
        img:"/images/logo/igl.jpg", className:"igl"
    },
  ]

  return (
<>
<div className="logo-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-6  d-flex justify-content-center align-items-center">

   <div className="logo-wrap p-sm-4 ">
            <img src="images/experince-shape.png" />
  <Slider {...settings}>
            <div id="slider-2" className=" d-flex rounded-slider justify-content-center align-items-center">
             
             {
                images.map((item, i)=>(
               
                    <div key={i}>
                          <img src={item.img} alt="ascletter_logo" style={{border:'none', borderRadius:'50%' }} className={item.className}/>
                        </div>
                ))
             }
               

       
     
        </div>
  </Slider>
        </div>
       
        
        <div className="col-md-12 col-lg-6 d-flex  align-items-center justify-content-center">
          <div className="pt-md-5 logo-info ">
            <h1>Trusted by Brands, Powered by Innovation</h1>
            <p className="fs-5 pt-3">Our solutions speak for themselves—and so do
               the brands that trust us. We’ve proudly partnered with startups, enterprises, and institutions that rely on our expertise to deliver technology that drives impact</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

</>
 
  )
}

export default Logosection
