import React, { Component } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import "./home.css"
import foto_footer from '../assets/foto_framare.jpg';

export class Home extends Component {
    render() {
        return(
            <div>
            <Container className={"maxSize pageContainer"} id={"homeContainer"}>
                <Row>
                    <Col xs={12} md={3}></Col>
                    <Col xs={12} md={6}>
                        <p>
                            “Framarè” è una giovane associazione, nata per dare un futuro alle aspirazioni e ai progetti sognati
                            dal giovane musicista Francesco Maresca, e da lui condivisi con Anna Donzelli, nell’amore che li
                            ha uniti e che hanno investito in iniziative per diffondere cultura, soprattutto musicale, e attività di
                            solidarietà. <br/><br/>
                            L’Associazione Framarè nasce dal desiderio di alimentare speranze e passioni, ispirati dall&#39;energia
                            di Francesco e Anna, costruttori di un’idea di futuro senza diseguaglianze e senza barriere. In un
                            clima aperto di comunità e di confronto tra coetanei e generazioni diverse, “Framarè” si propone di
                            proseguire il loro impegno senza mai trascurare la leggerezza, l’ironia e la creatività che Francesco
                            e Anna hanno sempre sprigionato.
                        </p>
                    </Col>
                    <Col xs={12} md={3}></Col>
                </Row>
            </Container>
            <Container className={"maxSize"}>
            <Row>
                <Col xs={12} md={12} className={"pl0 pr0"}>
                    <img src={foto_footer} alt="" className={"foto_footer"}/>
                </Col>
            </Row>
            </Container>
            </div>

        )
    }
}
