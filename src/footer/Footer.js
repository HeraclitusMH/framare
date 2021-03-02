import React, { Component } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import "./footer.css"

export class Footer extends Component {
    render() {
        return(
            <Container className={"footerContainer"}>
                <Row>
                    <Col xs={12} md={12}>
                        <p>Associazione di promozione sociale Francesco Maresca – Framarè</p>
                        <p>Codice fiscale: 96436370587</p>
                        <p>Sede Legale: Via Treviso, 33 00161 - Roma</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}