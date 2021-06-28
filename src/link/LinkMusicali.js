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
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/videoseries?list=PLLwFVa-q_QRsVbEBi-uF1s7yhZQB6kppB"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/lK8NjfZwInY"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/0RX_H_JOgjM"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/fSCp2hB6qEo"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/pzSk-a5YB6c"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            <br/><br/>
                        </Col>
                        <Col xs={12} md={3}></Col>
                    </Row>
                </Container>
            </div>

        )
    }
}
