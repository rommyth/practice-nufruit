import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './TargetSection.css'
import { FaApple } from 'react-icons/fa'
import Content1 from '../../img/bg-2.png'

const TargetSectionComp = () => {
    return (
        <>
            <Container>
                <div className='target-section'>
                    <Row>
                        <Col sm="12" lg="6" className="d-flex justify-content-center">
                            <img src={Content1} className='set-target-left'></img>
                        </Col>
                        <Col sm="12" lg="6" className="set-target-right">
                            <div className='ms-lg-5'>
                                <h1 className="mt-4">Set Your own targets.</h1>
                                <p className="mt-4">Our Well Balanced goal is the one we recommend for most people. However, if you have specific dietary requirements.</p>
                                <a href="#" className='btn btn-app mt-lg-3 mt-sm-2'>
                                    <div className='item-center'>
                                        <FaApple className="icon-apple" />
                                        <div className="text-left ms-1">
                                            <span className='get-on-the'>Get on the</span>
                                            <span className="app-store">App Store</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default TargetSectionComp
