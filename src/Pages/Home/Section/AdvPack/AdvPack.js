import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import './AdvPack.css'

const AdvPack = () => {
    return (
        <div>
            <Container>
                <h2 className='text-dark mt-5'>Most Popular Adventure Packages</h2>
                <h6 className='text-dark mb-5'>Choose A Tour Package From Our Most Wanted Tour Package List And Travel With Your Beloved One.</h6>
                <CardGroup>
                    <Card className='h-150px'>
                        <Card.Img variant="top" src="https://demo.themexpert.com/wordpress/valley/tour-package/wp-content/uploads/sites/6/2019/07/tour-4.png" />
                        <Card.Body>
                            <Card.Title className='fs-6'>Country of Greenland</Card.Title>
                            <hr />
                            <Card.Text>
                                <h4>Glacier Walk Combo</h4>
                                <button className='btn'>Know More</button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://demo.themexpert.com/wordpress/valley/tour-package/wp-content/uploads/sites/6/2019/07/tour-2.png" />
                        <Card.Body>
                            <Card.Title className='fs-6'>Country of America</Card.Title>
                            <hr />
                            <Card.Text>
                                <h4>Blue Ice Experience</h4>
                                <button className='btn'>Know More</button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://demo.themexpert.com/wordpress/valley/tour-package/wp-content/uploads/sites/6/2019/07/tour-3.png" />
                        <Card.Body>
                            <Card.Title>Capital of France</Card.Title>
                            <hr />
                            <Card.Text>
                                <h4>Laugavegur Trek Classic</h4>
                                <button className='btn'>Know More</button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </div >
    );
};

export default AdvPack;