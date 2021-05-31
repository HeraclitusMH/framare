import React, { Component } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import "./galleria.css"

export class Galleria extends Component {
    render() {
        return(
            <div>
                <Container className={"maxSize pageContainer"} id={"galleria"}>
                    <Row>
                        <Col xs={12} md={3}></Col>
                        <Col xs={12} md={6}>
                            <h2 className={"title"}>Galleria</h2> <br/><br/>
                            <p>
                                Galleria
                            </p> <br/><br/>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}