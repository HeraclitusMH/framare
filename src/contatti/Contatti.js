import React, { Component } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import "./contatti.css"

export class Contatti extends Component {
    render() {
        return(
            <div>
                <Container className={"maxSize pageContainer"} id={"contatti"}>
                    <Row>
                        <Col xs={12} md={3}></Col>
                        <Col xs={12} md={6}>
                            <h2 className={"title"}>Contatti</h2> <br/><br/>
                            <p>
                                Puoi contattarci all'indirizzo mail <a href="mailto:associazione.framare@gmail.com">associazione.framare@gmail.com</a>
                            </p> <br/><br/>
                        </Col>
                        <Col xs={12} md={3}></Col>
                    </Row>
                </Container>
            </div>

        )
    }
}