import React from 'react'
import Banner from './Banner'
import Services from '../service/Services'
import Work from '../work/Work'
import Team from '../team/Team'
import Testimonial from '../testmonial/Testimonial'
// import Form from './form/Form'\
import Form from './form/Form'
// import Logosection from './Logosection'

const Home = () => {
  return (
    <div>
      <Banner/>
      {/* <Logosection/> */}
      <Services/>
      <Work/>
      <Team/>
      <Testimonial/>
      <Form/>
    </div>
  )
}

export default Home
