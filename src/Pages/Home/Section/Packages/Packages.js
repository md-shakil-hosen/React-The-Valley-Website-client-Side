import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Packages.css'

const Packages = () => {
    return (
        <div className='destination mt-5'>
            <Card className="bg-dark text-white">
                <Card.ImgOverlay>
                    <Card.Title> <h2 className='mt-5'>Choose Your Destination</h2>  </Card.Title>
                    <Card.Text>
                        <h5>  This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</h5>
                    </Card.Text>
                    <button className='hero-btn2'>DESTINATION</button>
                </Card.ImgOverlay>
            </Card>
            <Row>
                <Col>

                </Col>
            </Row>
        </div>
    );
};

export default Packages;