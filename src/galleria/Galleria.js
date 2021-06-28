import React, { Component } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import "./galleria.css"
import foto1 from '../assets/foto/fra1.jpeg';
import foto2 from '../assets/foto/fra2.jpeg';
import foto3 from '../assets/foto/fra3.jpeg';
import foto4 from '../assets/foto/fra4.jpeg';
import foto5 from '../assets/foto/fra5.jpeg';
import foto6 from '../assets/foto/fra6.jpeg';
import foto7 from '../assets/foto/fra7.jpg';
import foto8 from '../assets/foto/fra8.jpeg';
export class Galleria extends Component {

    render() {

        const images = [
            {src:foto1},
            {src:foto2},
            {src:foto3},
            {src:foto4},
            {src:foto5},
            {src:foto6},
            {src:foto7},
            {src:foto8},
            ]
        return(
            <div>
                <Container className={"maxSize pageContainer"} id={"galleria"}>
                    <Row className="carousel-gallery">
                        <Col xs={12} md={3}></Col>
                        <Col xs={12} md={6}>
                            <h2 className={"title"}>Galleria</h2> <br/><br/>
                            <Carousel images={images} />
                            <br/><br/>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}
