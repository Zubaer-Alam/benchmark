import React from 'react'
import ServiceGrid from './ServiceGrid'
import ServiceDetails from './ServiceDetails'
import { HoverEffect } from './SericeGrid2'
import Services from './Services'
import Values from '../AboutPage/Values'

const ServicePage = () => {
  return (
    <div className='py-20'>
      <Values />
      {/* <Services /> */}
      {/* <ServiceDetails /> */}
      {/* <HoverEffect /> */}
      <ServiceGrid />
    </div>
  )
}

export default ServicePage