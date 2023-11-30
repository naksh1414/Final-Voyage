import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: guideImg,
    title: `Immersive Experience`,
    desc: ` Elevate your experience with premium features such as Crowd Tracking and Augmented Reality (AR) monuments visualization`,
  },
  {
    imgUrl: customizationImg,
    title: "Variety of Tours",
    desc: `
      Effortless bookings with real-time availability for monuments and museums. Skip the queues for a seamless experience. Partnering with premier tourist spots, museums, and attractions, we provide diverse, incredible experiences, from trekking to sports and water parks.`,
  },
  
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
