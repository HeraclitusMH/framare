import React, { Component } from 'react';
import './topmenu.css';
import {Container,Row,Col} from "react-bootstrap";

export class Topmenu extends Component {
    render() {
        return(
            <Container className={"top-menu-container"}>
                <Row className={"top-menu-logo-row"}>
                    <Col xs={12} md={3}></Col>
                    <Col className={"top-logo"} xs={12} md={6}></Col>
                    <Col xs={12} md={3}></Col>
                </Row>
                <Row className={"top-menu-list"}>
                    <Col xs={12} sm={12} md={{span:2}} className={"colMenuLink"}><a href="./" className={"brush2"}>Home</a></Col>
                    <Col xs={12} sm={12} md={2}><a href="./" className={"colMenuLink"} className={"brush1"}>Chi siamo</a></Col>
                    <Col xs={12} sm={12} md={3}><a href="./" className={"colMenuLink"} className={"brush1"}>Cosa facciamo</a></Col>
                    <Col xs={12} sm={12} md={3}><a href="./" className={"colMenuLink"} className={"brush1"}>Eventi e notizie</a></Col>
                    <Col xs={12} sm={12} md={2}><a href="./" className={"colMenuLink"} className={"brush2"}>Contatti</a></Col>
                </Row>
            </Container>
        )
    }
}
