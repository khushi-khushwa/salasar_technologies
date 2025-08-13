import React from 'react'
import './Team.css'
const Team = () => {

    const  team = [
        {name:'Jatin Bairwa', profession:'Digital/SEO Expert' , image:'images/our team/1 (1).png'},
         {name:'Arsh', profession:'UI/UX Designer' , image:'images/our team/2.png'},
          {name:'Khushi', profession:'Frontend Developer' , image:'images/our team/3.png'},
           {name:'Vikrant', profession:'Backend Developer' , image:'images/our team/4.png'},
     ]

  return (
   <>
   {/* <!-- our team --> */}
<section className="team-area ">
  <div className="container">
    <div className="section-title home-four-section-title text-white pt-5">
      {/* <span>Team</span> */}
      <h2 className="text-white">Meet Our Expert Team</h2>
      <p>With diverse skills and a shared passion for excellence, we work together to create solutions that help our clients grow and succeed.</p>
    </div>
    <div className="row">
        {
            team.map((item, index)=>(

      <div  key={index} className="col-lg-3 col-sm-6">
        <div className="single-team">
          <div className="team-single-img">
            <img src={item.image} alt="Image" />
            <div className="team-img">
              <img src="images/our team/team-shape.png" alt="Image" />
            </div>
          </div>
          <div className="team-content">
            <h3>{item.name}</h3>
            <span>{item.profession}</span>
            <ul>
              <li>
                <a href="#">
                  <i className="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-pinterest-alt"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
            ))
        }
      {/* <div class="col-lg-3 col-sm-6">
        <div class="single-team">
          <div class="team-single-img">
            <img src="images/our team/2.png" alt="Image" />
            <div class="team-img">
              <img src="images/our team/team-shape.png" alt="Image" />
            </div>
          </div>
          <div class="team-content">
            <h3>Alisa Maria</h3>
            <span>Developer</span>
            <ul>
              <li>
                <a href="#">
                  <i class="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxl-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxl-pinterest-alt"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="single-team">
          <div class="team-single-img">
            <img src="images/our team/3.png" alt="Image" />
            <div class="team-img">
              <img src="images/our team/team-shape.png" alt="Image" />
            </div>
          </div>
          <div class="team-content">
            <h3>Karen Peter</h3>
            <span>CEO</span>
            <ul>
              <li>
                <a href="#">
                  <i class="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxl-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxl-pinterest-alt"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="single-team">
          <div class="team-single-img">
            <img src="images/our team/4.png" alt="Image" />
            <div class="team-img">
              <img src="images/our team/team-shape.png" alt="Image" />
            </div>
          </div>
          <div class="team-content">
            <h3>Peter Jack</h3>
            <span>UI/UX Designer</span>
            <ul>
              <li>
                <a href="#">
                  <i class="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxl-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxl-pinterest-alt"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</section> 
{/* <!-- End Team Area --> */}

   </>
  )
}

export default Team
