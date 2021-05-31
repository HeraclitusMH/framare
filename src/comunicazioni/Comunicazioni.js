import React, { Component } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import "./comunicazioni.css"

export class Comunicazioni extends Component {
    render() {
        return(
            <div>
                <Container className={"maxSize pageContainer"} id={"comunicazioni"}>
                    <Row>
                        <Col xs={12} md={3}></Col>
                        <Col xs={12} md={6}>
                            <h2 className={"title"}>Comunicazioni</h2> <br/><br/>
                            <p>
                               Comunicazioni
                            </p>
                        </Col>
                        <Col xs={12} md={3}></Col>
                    </Row>
                </Container>
            </div>

        )
    }
}