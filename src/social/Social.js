import React, { Component } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import "./social.css"

export class Social extends Component {
    render() {
        return(
            <div>
                <Container className={"maxSize pageContainer"} id={"social"}>
                    <Row>
                        <Col xs={12} md={3}></Col>
                        <Col xs={12} md={6}>
                            <h2 className={"title"}>Social</h2> <br/><br/>
                            <p>
                                Social
                            </p> <br/><br/>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}