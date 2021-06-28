import React, { Component } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import "./eventinotizie.css"
import foto from '../assets/foto/fra2.jpeg';

export class EventiNotizie extends Component {
    render() {
        return(
            <div>
                <Container className={"maxSize pageContainer"} id={"eventinotizie"}>
                    <Row>
                        <Col xs={12} md={3}></Col>
                        <Col xs={12} md={6}>
                            <h2 className={"title"}>Eventi e notizie</h2> <br/><br/>
                            <p>
                                Nell’ambito della rassegna musicale Sorrento Jazz, il 13 dicembre 2019, è stata presentata la
                                nuova Associazione di promozione sociale “Framarè”, dedicata a Francesco Maresca, la giovane
                                promessa jazz di scuola romana nato a Sorrento, con l&#39;intento di promuovere, in collaborazione
                                con il Comitato promotore per la Fondazione Anna Donzelli, iniziative culturali e musicali e favorire
                                la diffusione della buona musica contro ogni barriera. <br/><br/>
                                Per l’evento si è esibita la nuova formazione musicale &quot;Hard We Bop Jazz Collective&quot;. Il gruppo,
                                nato dalla volontà di proseguire il percorso di ricerca musicale del loro amico sassofonista
                                Francesco Maresca, è composto da giovani jazzisti romani che hanno riproposto arrangiamenti
                                originali dell&#39;Hard Bop di grandi compositori quali W.Shorter, C.Walton, J. Henderson.<br/>
                                Il gruppo &quot;Hard We Bop Jazz Collective&quot; comprende cinque fiati e una sezione ritmica:<br/><br/>
                                Ludovico Franco (tromba)<br/><br/>
                                Giacomo Serino (tromba)<br/><br/>
                                Eugenio Varcasia (sax alto)<br/><br/>
                                Marco Bonelli (sax tenore)<br/><br/>
                                Ivan Bernardini (sax baritono)<br/><br/>
                                Emanuele Guarnieri (pianoforte)<br/><br/>
                                Manny Fioretti (pianoforte)<br/><br/>
                                Gianluca Ottaviano (chitarra)<br/><br/>
                                Alessandro Bintzios (contrabasso)<br/><br/>
                                Alessio Crespi (batteria)<br/><br/>
                            </p> <br/><br/>
                        </Col>
                        <Col xs={12} md={3}></Col>
                    </Row>
                </Container>
                <Row>
                    <Col xs={12} md={12} className={"pl0 pr0"}>
                        <img src={foto} alt="" className={"foto"}/>
                    </Col>
                </Row>
            </div>

        )
    }
}
