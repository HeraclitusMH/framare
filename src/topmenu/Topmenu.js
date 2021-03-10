import React, { Component } from 'react';
import './topmenu.css';
import {Link,BrowserRouter, Route, Switch } from 'react-router-dom';
import {Container,Row,Col, Dropdown} from "react-bootstrap";

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
                <Col xs={12} sm={12} md={{span:2}} className={"colMenuLink"} id={"homeLinkMenu"}><Link to="/home" className={"brush2"}>Home</Link></Col>
                <Col xs={12} sm={12} md={2} className={"colMenuLink"}>
                    <Dropdown className={"dropdownButton"}>
                        <Dropdown.Toggle className="dropdown-custom-components">
                            <Link className={"brush1"} to="/chisiamo">Chi Siamo</Link>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="1"><Link to="/associazionetrasparente">Associazione trasparente</Link></Dropdown.Item>
                            <Dropdown.Item eventKey="2"><Link to="/unisciti">Per far parte di Framarè</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col xs={12} sm={12} md={3}>
                    <Dropdown className={"dropdownButton"}>
                        <Dropdown.Toggle className="dropdown-custom-components">
                            <Link to="/cosafacciamo" className={"brush1"}>Cosa facciamo</Link>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="1">Attività</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Link (Selezioni musicali)</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Galleria</Dropdown.Item>
                            <Dropdown.Item eventKey="4">Social</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col xs={12} sm={12} md={3}>
                    <Dropdown className={"dropdownButton"}>
                        <Dropdown.Toggle className="dropdown-custom-components">
                            <Link to="./" className={"brush1"}>Eventi e notizie</Link>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="1">Comunicazioni</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col xs={12} sm={12} md={2}><Link to="./" className={"brush2"}>Contatti</Link></Col>
            </Row>
        </Container>

        )
    }
}
