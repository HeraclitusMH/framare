import React, { Component } from 'react';
import './topmenu.css';
import {Container,Row,Col} from "react-bootstrap";
import {Link,BrowserRouter, Route, Switch } from 'react-router-dom';

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
                    <Col xs={12} sm={12} md={{span:2}} className={"colMenuLink"}><Link to="./" className={"brush2"}>Home</Link></Col>
                    <Col xs={12} sm={12} md={2} className={"colMenuLink"} ><Link className={"brush1"} to="/chisiamo">Chi Siamo</Link></Col>
                    <Col xs={12} sm={12} md={3} className={"colMenuLink"} ><Link to="./" className={"brush1"}>Cosa facciamo</Link></Col>
                    <Col xs={12} sm={12} md={3} className={"colMenuLink"} ><Link to="./" className={"brush1"}>Eventi e notizie</Link></Col>
                    <Col xs={12} sm={12} md={2} className={"colMenuLink"} ><Link to="./" className={"brush2"}>Contatti</Link></Col>
                </Row>
            </Container>
        )
    }
}
