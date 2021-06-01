import React, { Component } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import "./unisciti.css"

export class Unisciti extends Component {
    render() {
        return(
            <Container className={"maxSize pageContainer"} id={"unisciti"}>
                <Row>
                    <Col xs={12} md={3}></Col>
                    <Col xs={12} md={6}>
                        <h2 className={"title"}>Vieni con noi</h2> <br/><br/>
                        <p>
                            Se vuoi partecipare alle nostre attività, perché condividi con noi lo spirito di questo progetto,
                            spedisci la tua domanda di adesione a associazione.framare@gmail.com
                            compilando <a href="#">questo</a> modulo
                        </p>
                        <br/><br/>
                    </Col>
                    <Col xs={12} md={3}></Col>
                </Row>
            </Container>
        )
    }
}
