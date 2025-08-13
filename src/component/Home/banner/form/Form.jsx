import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';

const Form = () => {
  const [formvalue, setFormvalue] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    textbox: '',
  });

  const contactInfo = [
    { name: 'Phone', contact: '+91 7011230208', icon: 'fa fa-phone' },
    { name: 'Email', contact: 'khushikhushwah70@gmail.com', icon: 'fa fa-envelope' },
    { name: 'Address', contact: 'Gurgaon Haryana', icon: 'fa fa-map-marker' },
  ];

 
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
    <div className="contact-section">
      <div className="container">
        <div className="row row-gap">
          <div className="col-md-12 col-lg-4">
            <div className="where-contact ps-md-5 ps-sm-5">
              <div className="mb-3 d-flex justify-content-center align-items-center">
                <h2>Contact Us</h2>
              </div>
              <div className="contact-info">
                {contactInfo.map((item, index) => (
                  <div className="d-flex" key={index}>
                    <div className="icon">
                      <i className={item.icon} aria-hidden="true"></i>
                    </div>
                    <div className="content-info ms-3">
                      <h5 className="ct-by">{item.name}</h5>
                      <p>{item.contact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-12">
                <form className="ps-md-5 ps-sm-5"  onSubmit={submitForm}>
                  <div className="upper-input mb-3 d-md-flex">
                    <input
                      type="text"
                      name="name"
                      value={formvalue.name}
                      onChange={changevalue}
                      className="name shadow-sm"
                      placeholder="Name:"
                      required
                    />

                    <input
                      type="email"
                      name="email"
                      value={formvalue.email}
                      onChange={changevalue}
                      className="email shadow-sm"
                      placeholder="Email:"
                      required
                    />
                  </div>

                  <div className="bottom-input mb-3 d-md-flex">
                    <input
                      type="text"
                      name="subject"
                      value={formvalue.subject}
                      onChange={changevalue}
                      className="subject shadow-sm"
                      placeholder="Subject:"
                      required
                    />
                    <input
                      type="text"
                      name="phone"
                      value={formvalue.phone}
                      onChange={changevalue}
                      className="phone shadow-sm"
                      placeholder="Phone:"
                      required
                    />
                  </div>

                  <div className="message-wrap">
                    <textarea
                      name="textbox"
                      value={formvalue.textbox}
                      onChange={changevalue}
                      id="comment-message"
                      rows="8"
                      className="shadow-sm px-2 py-2"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="fl-btn btn-linear linear-color-one mb-3">
                    <button
                      name="submit"
                      type="submit"
                     
                      className="submit btn-contact hv-linear border-corner"
                      id="submit"
                    >
                      Contact Today
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
