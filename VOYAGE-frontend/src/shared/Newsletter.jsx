import React, { useState } from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/information.png";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

// import Thank from "./thankyou-subscribe";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const HandleSubmit = (e) => {
    e.preventDefault();
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the entered email is valid
    if (!emailRegex.test(email)) {
      // If the email is not valid, you can handle it accordingly (show an error message, for example)
      console.error("Invalid email address");
      return;
    }
    setEmail("");
    setShowDialog(true);
  };
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <form onSubmit={HandleSubmit}>
              <div className="newsletter__content">
                <h2>Subcribe now to get useful traveling information</h2>

                <div className="newsletter__input">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <button className="btn newsletter__btn">Subscribe</button>
                </div>
                <p>
                  Unlock the world of travel with our subscription service. By
                  subscribing, you gain access to a world of incredible
                  adventures and invaluable information to make your journeys
                  unforgettable.
                </p>
              </div>
            </form>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      {showDialog && (
        <div className="thank__you">
          <span>
            <i class="ri-checkbox-circle-line"></i>
          </span>
          <h1 className="mb-3 fw-semibold">Thank You</h1>
          <h3 className="mb-4">
            Your will recieve our NewsLetter on the Registered Email Id!!
          </h3>
          <Button className="btn primary__btn w-25">
            <Link to="/home">Back To Home</Link>
          </Button>
        </div>
      )}
    </section>
  );
};

export default NewsLetter;
