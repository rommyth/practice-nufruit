import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './TrackAnyway.css'
import imgContent1 from '../../img/content-1.png'
import { AiOutlinePercentage } from 'react-icons/ai'
import { BiBarcodeReader } from 'react-icons/bi'

const TrackAnywayComp = () => {
    return (
        <div class="track-anyway">
            <Container>
                <div className="extra-container">
                    <Row>
                        <Col className="track-left">
                            <h1>Track anywhere, anytime.</h1>
                            <div className="d-flex justify-content-center">
                                <img src={imgContent1} className="img-content-left"></img>
                            </div>
                        </Col>
                        <Col className="track-right">
                            <div className='ms-lg-5'>
                                <h2>Over 250,000 foods with photos. Plus barcode scanning App.</h2>
                                <div className='margin-top-4'>
                                    <div className="diamond-shape" style={{ backgroundColor: '#FECFD0' }}><span><AiOutlinePercentage /></span></div>
                                    <div className="margin-left-3">
                                        <h5>Our Well Balanced</h5>
                                        <p className="mt-3">Goal is the one we recommend for most people. However, if you have specific dietary requirements.</p>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <div className="diamond-shape" style={{ backgroundColor: '#FEDFB1' }}><span><BiBarcodeReader /></span></div>
                                    <div className="margin-left-3">
                                        <h5>Barcode Scanner</h5>
                                        <p className="mt-3">Goal is the one we recommend for most people. However, if you have specific dietary requirements.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container >
        </div >
    )
}

export default TrackAnywayComp
