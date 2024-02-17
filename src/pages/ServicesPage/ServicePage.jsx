import React from 'react'
import ServiceGrid from './ServiceGrid'
import ServiceDetails from './ServiceDetails'
import { HoverEffect } from './SericeGrid2'
import Services from './Services'

const ServicePage = () => {
  return (
    <div className='py-20'>
        <Services />
        {/* <ServiceDetails /> */}
        {/* <ServiceGrid /> */}
        <HoverEffect />
    </div>
  )
}

export default ServicePage