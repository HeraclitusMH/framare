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
                        <h2 className={"title"}>Per far parte di Framaré</h2> <br/><br/>
                        <p>
                            Per aderire all’associazione è necessario condividere lo spirito e i principi fondamentali contenuti
                            nello statuto dell’associazione e trasmettere il modulo di richiesta di adesione all’email
                            associazione.framare@gmail.com che verrà opportunamente vagliata dal Consiglio Direttivo,
                            secondo i criteri stabiliti all’art.5 dello Statuto.
                        </p>
                        <br/><br/>
                    </Col>
                    <Col xs={12} md={3}></Col>
                </Row>
            </Container>
        )
    }
}