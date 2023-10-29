import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
 
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `For a more immersive experience, the platform can offer AR (Augmented Reality) visualization of monuments and attractions. Users can use their smartphones or AR glasses to get additional information about the attractions they're visiting. This can include historical facts, audio guides, and other interactive features to enhance their understanding of the place.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Customizing a platform for efficient booking with real-time availability and premium services for monuments and museums can be tailored to meet specific user needs and branding requirements. `,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList