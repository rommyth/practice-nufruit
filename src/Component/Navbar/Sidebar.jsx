import React, { useState } from 'react'
import { Offcanvas, Button } from 'react-bootstrap'
import './NavbarStyle.css'
import { BsFillGridFill } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineUser, AiFillYoutube } from 'react-icons/ai'


function Sidebar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="fonts">
            <Button className='btn-our' variant="" onClick={handleShow}>
                <BsFillGridFill className="me-1" /> Our app
            </Button>

            <Offcanvas show={show} onHide={setShow}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="align-cusitems-center">
                    <a className="btn-side" href="#"><AiOutlineHome className='fs-5' /> Home</a>
                    <a className="btn-side" href="#"><AiOutlineInfoCircle className='fs-5' /> About</a>
                    <a className="btn-side" href="#"><AiOutlineUser className='fs-5' /> My Page</a>
                    <a className="btn-side" href="https://www.youtube.com/watch?v=TiPwYy9qaUg&t=14s"><AiFillYoutube className="fs-5" /> Youtube</a>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Sidebar
