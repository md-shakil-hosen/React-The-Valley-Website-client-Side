import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TourPackage.css";

const TourPackage = () => {

  const [packages, setPackages] = useState([])

  useEffect(() => {
    fetch('https://dry-journey-96708.herokuapp.com/card')
      .then(res => res.json())
      .then(data => setPackages(data))
  }, [])

  return (
    <>
      {
        (packages.length !== 0) ? <div className="my-5">
          <h1 className='mt-5'>The Valley Travel Package</h1>
          <h5 className='mb-5'>Choose Your Country , Enjoy Your Life</h5>
          <div className="tour-card">
            <Container>
              <Row xs={1} md={3} className="g-4">
                {
                  packages.map(pack => <Col>
                    <Card className='card-body'>
                      <Card.Img
                        style={{ height: '220px' }}
                        variant="top"
                        src={pack.img}
                      />
                      <Card.Body>
                        <Card.Title>{pack.name}</Card.Title>
                        <Card.Text>{pack.Country}</Card.Text>
                        <hr />
                        <Card.Text className='tour-price fs-4'>${pack.price}</Card.Text>
                        <Link to={`/selected/${pack._id}`}>
                          <button className="btn mx-1 ">Book Now</button></Link>
                      </Card.Body>
                    </Card>
                  </Col>)
                }
              </Row>
            </Container>
          </div>
        </div> : <h1><Spinner animation="grow" variant="info" /></h1>
      }
    </>

  );
};

export default TourPackage;
