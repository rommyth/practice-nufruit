import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Sponsor1 from '../../img/sponsor-1.png'
import Sponsor2 from '../../img/sponsor-2.jpg'
import Sponsor3 from '../../img/sponsor-3.png'
import Sponsor4 from '../../img/sponsor-4.png'
import './Sponsor.css'

const SponsorComp = () => {
    return (
        <div>
            <Container>
                <div className="sponsor">
                    <img src={Sponsor1}></img>
                    <img src={Sponsor2}></img>
                    <img src={Sponsor3}></img>
                    <img src={Sponsor4}></img>
                </div>
            </Container >
        </div >
    )
}

export default SponsorComp
