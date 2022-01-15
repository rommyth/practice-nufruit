import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './JContent.css'
import { FaApple } from 'react-icons/fa'
import imgContent3 from '../../img/content-3.png'

const JContentComp = () => {
    return (
        <div id="join" className="join-margin-top">
            <Container className="bg-lightblue">
                <div className="join-container">
                    <Row>
                        <Col sm="6" lg="6" className="join-left" >
                            <h1>Join free <br />for 7 days</h1>
                            <a href="#" className='btn join-btn-app mt-lg-4 mt-sm-4'>
                                <div className='join-item-center'>
                                    <FaApple className="join-icon-apple" />
                                    <div className="join-text-left ms-1">
                                        <span className='join-get-on-the'>Get on the</span>
                                        <span className="join-app-store">App Store</span>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col sm="6" lg="6">
                            <img src={imgContent3} className="img-content3"></img>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default JContentComp
