import React, { Component } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import "./associazioneTrasparente.css"

export class AssociazioneTrasparente extends Component {
    render() {
        return(
            <Container className={"maxSize pageContainer"} id={"associazioneTrasparente"}>
                <Row>
                    <Col xs={12} md={3}></Col>
                    <Col xs={12} md={6}>
                        <h2 className={"title"}>Associazione trasparente</h2> <br/><br/>
                        <p>
                            Associazione trasparente
                        </p>
                        <br/><br/>
                    </Col>
                    <Col xs={12} md={3}></Col>
                </Row>
            </Container>
        )
    }
}