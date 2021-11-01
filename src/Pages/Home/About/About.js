import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className='mt-5'>
            <h2 className='about-us'>About Us</h2>
            <Container>
                <Row>
                    <Col id='#about' sm={4}>
                        {/* About Image  */}
                        <img className='img-fluid' src="https://cdn.pixabay.com/photo/2021/06/10/16/15/travel-6326482_960_720.jpg" alt="" />
                    </Col>
                    <Col sm={8}>
                        <h5>WHAT WE DO</h5>
                        <h2 className='about-head' >We Have 25 Years Experience</h2>
                        <h6 className='about-head' >Provide the tourist market with the quality personal required by the tourism industry. Produce expeditions and memories that would satisfy each and every single of the customers. Evaluate current cultural, economic, and social issues affecting the tourism and travel industry.</h6>
                        <br />

                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <h5>our Mission</h5> </Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col sm={4}>
                                            <img src="https://cdn.pixabay.com/photo/2021/10/11/18/58/lake-6701636__480.jpg" width='150px' alt="" />
                                        </Col>
                                        <Col sm={8}>
                                            <p>A Mission Statement defines the company's business, its objectives and its approach to reach those objectives. A Vision Statement describes the desired future position of the company. Elements of Mission and Vision Statements are often combined to provide a statement of the company's purposes, goals and values</p>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> <h5>Our Strategies</h5> </Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col sm={4}>
                                            <img src="https://cdn.pixabay.com/photo/2018/10/19/12/14/train-3758523__340.jpg" width='150px' alt="" />
                                        </Col>
                                        <Col sm={8}>
                                            <p>A mission statement is a short summary of your company's purpose. A mission statement provides perfect clarity behind the “what,” the “who,” and the “why,” of your company. The best mission statements are guidelines by which a company operates. Everything you do as a company should work toward your mission statement.</p>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> <h5>Our Vision</h5> </Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col sm={4}>
                                            <img src="https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083__340.jpg" width='150px' alt="" />
                                        </Col>
                                        <Col sm={8}>
                                            <p>A mission statement is a short summary of your company's purpose. A mission statement provides perfect clarity behind the “what,” the “who,” and the “why,” of your company. The best mission statements are guidelines by which a company operates. Everything you do as a company should work toward your mission statement.</p>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;