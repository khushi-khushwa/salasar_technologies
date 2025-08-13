import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
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

  const testimonials = [
    {
      img: 'vmirf.png',
      name: 'Ajay',
      company: 'VIE Medical Institute and Research Foundation ',
      message:
        'Salasar has been our go-to partner for creative design. They have designed our posts, certificates, and provided top-notch editing services — always exceeding expectations.',
    },
    {
      img: 'mom.jpg',
      name: 'MomHomes',
      company: 'MomHomes',
      message:
        'Salasar transformed our vision into a stunning online presence. The MomHomes interior website they built not only looks beautiful but also perfectly reflects our brand’s elegance and creativity.',
    },
    // {
    //   img: 'images/testimonial/client-3.jpg',
    //   name: 'Jhon',
    //   company: 'BizBite',
    //   message:
    //     'Objectively synthesize client-centered e-tailers for maintainable channels. Holisticly administrate customer directed vortals whereas tactical functionalities.',
    // },
    // {
    //   img: 'images/testimonial/client-4.jpg',
    //   name: 'Jhon',
    //   company: 'BizBite',
    //   message:
    //     'Enthusiastically innovate B2C data without clicks-and-mortar convergence. Monotonectally deliver compelling testing procedures vis-a-vis B2B testing procedures.',
    // },
  ];

  return (
    <>
      <div className="testimonial-section">
        <div className="container">
          <div className="row d-flex row-space">
            <div className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
              <div className="testimonial-heading">
                <h2>What Our Client Say About Us</h2>
                <span className="animate-border mb-4"></span>
                <p>
                  Collaboratively actualize excellent schemas without effective models. Synergistically engineer
                  functionalized applications rather than backend e-commerce.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-6">
              <div className="testimonial-content position-relative">
                <img
                  src="images/testimonial/testimonial-arrow-top.png"
                  className="img-fluid testimonial-tb-shape shape-top position-absolute top-0 start-50 translate-middle-x"
                  alt="testimonial shape"
                />
<div className='testimonial-shape item'>
                <Slider {...settings}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-quote ">
                      <div className="media author-info mb-3">
                        <div className="author-img mr-3">
                          <img src={testimonial.img} alt="client" />
                        </div>
                        {/* <div className="media-body ">
                          <h5 className="mb-0 text-white fs-4">{testimonial.name}</h5> */}
                          
                        {/* </div> */}

                        <span className="fas f-aquote-right icon-md text-white"></span>
                      </div>
                      <div style={{marginTop:'2rem'}}>

                      <h5 className=" text-white fs-4">{testimonial.company}</h5>
                      </div>
                      <div className="client-say text-white mt-2 lh-lg">
                        <p>{testimonial.message}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
</div>

                <img
                  src="images/testimonial/testimonial-arrow-bottom.png"
                  className="img-fluid testimonial-tb-shape shape-bottom "
                  alt="testimonial shape"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
