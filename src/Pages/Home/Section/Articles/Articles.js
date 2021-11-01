import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Articles.css'

const Articles = () => {
    return (
        <div>
            <Container>
                <h2 className='mt-5'>  Articles & News </h2>
                <h6 className='mb-5'>Choose A Tour Package From Our Most Wanted Tour Package List And Travel With Your Beloved One.</h6>
                <Row>
                    <Col>
                        <Card className='card-shadow' style={{ width: '22rem' }}>
                            <Card.Img className='tour-img' src="https://demo.themexpert.com/wordpress/valley/destination-showcase/wp-content/uploads/sites/3/2019/06/blog-2.jpg" />
                            <Card.Body>
                                <Card.Title><h6>Jun 30, 2020 | Categorized</h6> </Card.Title>
                                <span className='tour-title'>5 things you have</span>
                                <p className='duration ml'>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean</p>
                                <Card.Text>
                                    <Row className='mt-3'>
                                        <Col><button className='read-btn'>Read More</button></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card-shadow' style={{ width: '22rem' }}>
                            <Card.Img className='tour-img' src="https://demo.themexpert.com/wordpress/valley/destination-showcase/wp-content/uploads/sites/3/2019/04/blog-3.jpg" />
                            <Card.Body>
                                <Card.Title><h6>Jun 16, 2019 | Categorized</h6> </Card.Title>
                                <span className='tour-title'>How To Get Strangers</span>
                                <p className='duration ml'>Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</p>
                                <Card.Text>
                                    <Row className='mt-3'>
                                        <Col><button className='read-btn'>Read More</button></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card-shadow' style={{ width: '22rem' }}>
                            <Card.Img className='tour-img' src="https://demo.themexpert.com/wordpress/valley/destination-showcase/wp-content/uploads/sites/3/2019/04/blog-4.jpg" />
                            <Card.Body>
                                <Card.Title><h6>Jun 2, 2019 | Categorized</h6> </Card.Title>
                                <span className='tour-title'>Top 10 Travel Bloggers</span>
                                <p className='duration ml'>Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. </p>
                                <Card.Text>
                                    <Row className='mt-3'>
                                        <Col><button className='read-btn'>Read More</button></Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Articles;