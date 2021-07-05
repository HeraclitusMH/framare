import React, { Component } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import "./social.css"
import fbLogo from '../assets/facebookIcon.png';
import mateLogo from '../assets/foto/Logo-MATEMU-CIES.jpg';
import gmailLogo from '../assets/gmail.png';

export class Social extends Component {
    render() {
        return(
            <div>
                <Container className={"maxSize pageContainer"} id={"social"}>
                <h2 className={"title"}>Collegamenti</h2> <br/><br/>
                    <Row>
                        <Col xs={12} md={3}></Col>
                        <Col xs={12} md={6}>
                            <p>
                            <a href="https://www.facebook.com/AssociazioneFramare/">
                                <img src={fbLogo} alt="" className={"collegamenti-logo"} />
                            </a>
                            Pagina Facebook dell'associazione
                            <br/><br/>
                            <a href="mailto:associazione.framare@gmail.com">
                                <img src={gmailLogo} alt="" className={"collegamenti-logo"} />
                            </a>
                            Indirizzo e-mail dell'associazione: associazione.framare@gmail.com
                            <br/><br/>
                            <a href="https://www.cies.it/matemu/">
                                <img src={mateLogo} alt="" className={"collegamenti-logo"} />
                            </a>
                            Sito dell'associazione Matemù
                            </p> 
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}