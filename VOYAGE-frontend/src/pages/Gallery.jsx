import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Subtitle from './../shared/subtitle'




function Gallery() {
  return (
    <section>
         <Container>
            <center>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Our Gallery'} />
                  <h2 className="gallery__title">View our Beautiful gallery</h2>
               </Col>
               <Col lg='12'>
                  <MasonryImagesGallery />
               </Col>
            </Row>
            </center>
         </Container>
      </section>
  )
}

export default Gallery
