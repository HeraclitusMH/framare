import React, { Component } from 'react';
import {Container,Row,Col} from "react-bootstrap";

export class Chisiamo extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col xs={12} md={3}></Col>
                    <Col xs={12} md={6}>
                        CHI SIAMO
                         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                    </Col>
                    <Col xs={12} md={3}></Col>
                </Row>
            </Container>
        )
    }
}