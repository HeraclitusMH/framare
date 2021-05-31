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
                            L’associazione di promozione sociale “Framarè” è una giovane associazione, senza scopo di lucro,
                            che, ispirata da finalità civiche, solidaristiche e di utilità sociale, si propone di organizzare e
                            promuovere attività culturali, artistiche o ricreative di interesse sociale, di sostegno e diffusione
                            della cultura, soprattutto musicale e della pratica del volontariato. <br/><br/>
                            L’Associazione Framaré nasce dal desiderio che tra i giovani si alimentino speranze e passioni,
                            ispirati dall&#39;energia di Francesco e Anna, entrambi giovani sognatori, entusiasti di costruire con
                            concretezza e determinazione un futuro, senza diseguaglianze e senza barriere. Con i tanti amici,
                            infatti, in un clima aperto di comunità, credevano nel metodo del “fare insieme”, dell’approfondire
                            sui testi e con la pratica, del confronto serio e continuo tra i coetanei, con altre generazioni, senza
                            mai trascurare leggerezza, simpatia e creatività, che Francesco realizzava con il jazz e il suo
                            sassofono.
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