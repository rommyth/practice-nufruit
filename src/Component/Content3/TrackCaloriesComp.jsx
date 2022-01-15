import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './TrackCalories.css'
import { FaApple } from 'react-icons/fa'
import Content2 from '../../img/content-2.png'

const TrackCaloriesComp = () => {
    return (
        <>
            <Container>
                <div className="calories-section">
                    <Row>
                        <Col sm="12" lg="6" className="calories-right pe-lg-5" >
                            <h1>Calories tracking.</h1>
                            <p className="mt-lg-4 mt-4">Our Well Balanced goal is the one we recommend for most people. However, if you have specific dietary requirements.</p>
                            <a href="#" className='btn btn-app mt-lg-3 mt-sm-2'>
                                <div className='item-center'>
                                    <FaApple className="icon-apple" />
                                    <div className="text-left ms-1">
                                        <span className='get-on-the'>Get on the</span>
                                        <span className="app-store">App Store</span>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col sm="12" lg="6" className="d-flex justify-content-center mt-5">
                            <img src={Content2} className='calories-left'></img>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default TrackCaloriesComp
