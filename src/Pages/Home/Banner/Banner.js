import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Row className='banner-img img-fluid'>
        <Col xs={12} >
          <div className='mt-5 pt-5'>
            <h1 className=' header-text display-3 fw-bolder '>The Valley Travel</h1>
            <div className='mt-5'>
              <button className='hero-btn1 mb-3 mb-lg-0'>Browse Destination</button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
