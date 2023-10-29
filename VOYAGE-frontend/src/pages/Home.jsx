import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/video3.mp4'
import heroVideo2 from '../assets/images/video1.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from './../shared/subtitle'
import SearchBar from './../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import NewsLetter from '../shared/Newsletter'
import Trip from '../assets/images/Trip2.gif'
const Home = () => {
   return <>
      <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="hero__content">
                     <div className="hero__subtitle d-flex align-items-center">
                        <h1>VOYAGE</h1>
                        <img src={worldImg} alt="" />
                     </div>
                     <h1>Travelling made <span className='hightlight'>easier</span></h1>
                     <h3>
                     Discover diverse travel adventures making your journey unforgettable
                     </h3>
                  </div>
               </Col>

               <Col lg='2'>
                  <div className="hero__img-box  mt-5">
                  <video src={heroVideo} alt="" controls />
                  </div>
               </Col>
               <Col lg='2'>
                  <div className="hero__img-box hero__video-box mt-4">
                  <img src={heroImg02} alt="" />
                  </div>
               </Col>
               <Col lg='2'>
                  <div className="hero__img-box">
                  <video src={heroVideo2} alt="" controls />
                  </div>
               </Col>

               <SearchBar />
            </Row>
         </Container>
      </section>
   

      <section>
         <Container>
            <Row>
               <Col lg='3'>
                  <h5 className="services__subtitle">What we serve</h5>
                  <h2 className="services__title">We offer our best services</h2>
               </Col>
               <ServiceList />
            </Row>
         </Container>
      </section>

    
      <section>
         <Container>
            <Row>
               <Col lg='12' className='mb-5'>
                  <Subtitle subtitle={'Explore'} />
                  <h2 className='featured__tour-title'>Our featured tours</h2>
               </Col>
               <FeaturedTourList />
            </Row>
         </Container>
      </section>
  
      <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="experience__content">
                     <Subtitle subtitle={'Experience'} />
                     <h2>With our all experience <br /> we will serve you</h2>
                     <p>Efficient booking with real-time availability for monuments and museums.
No more waiting in long queues; a hassle-free experience
We partner with premier tourist spots, museums, and attractions like trekking, sports, and water parks to provide a wide array of amazing experiences.

                        <br /> Premium services like Crowd Tracking and AR monuments visualization</p>
                  </div>

                  <div className="counter__wrapper d-flex align-items-center gap-5">
                     <div className="counter__box">
                        <span>1</span>
                        <h6>Successful trip</h6>
                     </div>
                     <div className="counter__box">
                        <span>2</span>
                        <h6>Regular clients</h6>
                     </div>
                     <div className="counter__box">
                        <span>1/2</span>
                        <h6>Year experience</h6>
                     </div>
                  </div>
               </Col>
               <Col lg='6'>
                  <div className="experience__img">
                  <img src={Trip} alt="" />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
    
      <section>
         <Container>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Gallery'} />
                  <h2 className="gallery__title">Visit our customers tour gallery</h2>
               </Col>
               <Col lg='12'>
                  <MasonryImagesGallery />
               </Col>
            </Row>
         </Container>
      </section>
      
     
  
      <NewsLetter />
   </>
}

export default Home