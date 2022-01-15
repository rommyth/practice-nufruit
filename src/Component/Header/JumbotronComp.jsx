import React from 'react'
import './HeaderStyle.css'
import { Container, Row, Col } from 'react-bootstrap'

function JumbotronComp() {
    return (
        <>
            <Container>
                <Row>
                    <Col sm lg="6">
                        <div className="jumbotron">
                            <h1>Life Changing weight loss.</h1>
                            <p className="mt-4">Tracking made <span className="text-underline">easy</span> 🍌</p>
                            <div className="btn-margin">
                                <div className="btn btn-primary btn-jumbotron mt-3">Start Now</div>
                            </div >
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default JumbotronComp
