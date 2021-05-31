import React, { Component } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import "./link.css"

export class LinkMusicali extends Component {
    render() {
        return(
            <div>
                <Container className={"maxSize pageContainer"} id={"link"}>
                    <Row>
                        <Col xs={12} md={3}></Col>
                        <Col xs={12} md={6}>
                            <h2 className={"title"}>Link (Selezioni musicali)</h2> <br/><br/>
                            <p>
                                Link attività musicali
                            </p> <br/><br/>
                        </Col>
                        <Col xs={12} md={3}></Col>
                    </Row>
                </Container>
            </div>

        )
    }
}