import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';
// import logo from './assets/images/logo/salasar-logo.png';
import logo from '../../assets/images/logo/salasar-logo.png'
import './Header.css'
import Banner from '../Home/banner/Banner';
{/* <img src={logo} alt="Logo" /> */}
export const Header = () => {



  const navItems = [
    { name: "Home", link: "/home", active: true },
    { name: "About", link: "/about", active: false },
    { name: "Services", link: "/services", active: false },
    { name: "Contact", link: "/contact", active: false }
  ];

  return (
    <>
    <div>
      {/* Start preloader */}
      <div className="preloader">
        <div className="Ids-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
      {/* End preloader Area */}

      {/* Start Navbar Area */}
      <div className="navbar-area is-sticky">
        <div className="main-nav">
          <nav className="navbar navbar-expand-lg nav-light fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#">
               <img src={logo} alt="Logo" />
              </a>
              <button 
                className="navbar-toggler shadow-none border-0" 
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#offcanvasNavbar" 
                aria-controls="offcanvasNavbar" 
                aria-label="Toggle navigation"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
              <div 
                className="offcanvas offcanvas-start" 
                tabIndex="-1" 
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Technologies</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                   {navItems.map((item, index) => (
            <li className="nav-item p-3" key={index}>
          <NavLink
      to={item.link}
      className={({ isActive }) =>
        `nav-link fw-semibold text-white ${isActive ? 'active' : ''}`
      }
    >
      {item.name}
    </NavLink>
  </li>
))}
                  </ul>
                  
                  {/* Start Other Option */}
                  <div className="others-option d-flex justify-content-center align-items-center header-icon p-3">
                    <div className="default-btn text-decoration-none" to="#">
                      
                      <i className="fa-brands fa-square-facebook"></i>
                                          <a 
  href="https://www.linkedin.com/in/salasar-technologies-7555ba37a/" 
  target="_blank" 
  rel="noopener noreferrer"
>
   <i className="fa-brands fa-linkedin"></i>
</a>
                    
                      <a 
  href="https://www.instagram.com/salasartechnologies/" 
  target="_blank" 
  rel="noopener noreferrer"
>
    <i className="fa-brands fa-instagram"></i>
</a>
                    </div>
                  </div>
                  {/* End Other Option */}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
<Outlet></Outlet>
      </div>
         
      </>
  )
}
