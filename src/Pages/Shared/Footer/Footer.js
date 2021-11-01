import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <hr className=' mt-5 mb-3' />
      <div className="bg-custom text-light text-start pt-5 cusFooter">
        <Container>
          <Row xs={1} md={2} lg={4}>
            <Col>
              <div className="footer-img">
                <img src="https://demo.themexpert.com/wordpress/valley/destination-showcase/wp-content/uploads/sites/3/2019/07/logo-dark.png" alt="" />
              </div>
              <h6 className='footer-p text-dark'>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</h6>
              <div>
                <a href="/"><i class="fab fa-facebook-square fs-5 ms-2"></i></a>
                <a href="/"><i class="fab fa-twitter-square fs-5 ms-2"></i></a>
                <a href="/"><i class="fab fa-google-plus-square fs-5 ms-2"></i></a>
                <a href="/"><i class="fab fa-linkedin fs-5 ms-2"></i></a>
              </div>
            </Col>
            <Col>
              {/* Destination Section  */}
              <h4 className="footer-title">Destinations</h4>
              <ul className=" quick-link d-block p-0 m-0">
                <li>
                  <a href="/">Africa</a>
                </li>
                <li>
                  <a href="/">Oceania</a>
                </li>
                <li>
                  <a href="/">Portugal</a>
                </li>
                <li>
                  <a href="/">Switzerland</a>
                </li>
              </ul>
            </Col>
            <Col>
              {/* Information Section  */}
              <h4 className="footer-title">Information</h4>
              <ul className=" quick-link d-block p-0 m-0">
                <li>
                  <a href="/">About US</a></li>
                <li>
                  <a href="/">Online Query</a></li>
                <li>
                  <a href="/">Terms And Condition</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h4 className="footer-title">Adventures</h4>
              <ul className=" quick-link d-block p-0 m-0">
                <li>
                  <a href="/">The Dead Man</a>
                </li>
                <li>
                  <a href="/">The Cursed</a>
                </li>
                <li>
                  <a href="/">Rock Climbing</a>
                </li>
                <li>
                  <a href="/">Laugavegur</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
        {/* Copyright  */}
        <hr className="fw-5" />
        <p className="p-0 m-0 text-center text-dark mb-5">Alright reserved by Shakil Mahmud</p>
      </div>
    </div>
  );
};

export default Footer;
