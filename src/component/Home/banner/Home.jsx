import React from 'react'
import Banner from './Banner'
import Services from '../service/Services'
import Work from '../work/Work'
import Team from '../team/Team'
import Testimonial from '../testmonial/Testimonial'
import Form from './form/Form'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <Work/>
      <Team/>
      <Testimonial/>
      <Form/>
    </div>
  )
}

export default Home
