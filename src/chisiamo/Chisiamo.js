import React, { Component } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import "./chisiamo.css"

export class Chisiamo extends Component {
    render() {
        return(
            <Container className={"maxSize pageContainer"} id={"chisiamoContainer"}>
                <Row>
                    <Col xs={12} md={3}></Col>
                    <Col xs={12} md={6}>
                        <h2 className={"title"}>Chi siamo</h2> <br/><br/>
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
                        <br/><br/>
                        I progetti finora avviati dall’Associazione Framarè sono stati condivisi con il Comitato Promotore della Fondazione Anna Donzelli,
                        per l’affetto, la stima e la stretta comunanza di intenti,
                        sebbene il difficile periodo della pandemia ne abbia ostacolato le auspicate potenzialità e sviluppi.
                    </Col>
                    <Col xs={12} md={3}></Col>
                </Row>
            </Container>
        )
    }
}