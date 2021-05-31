import React, { Component } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import "./cosafacciamo.css"

export class CosaFacciamo extends Component {
    render() {
        return(
            <div>
                <Container className={"maxSize pageContainer"} id={"cosafacciamo"}>
                    <Row>
                        <Col xs={12} md={3}></Col>
                        <Col xs={12} md={6}>
                            <h2 className={"title"}>Cosa facciamo</h2> <br/><br/>
                            <p>
                                L’associazione si propone di promuovere soprattutto attività ed eventi di carattere culturali e
                                musicali, nonché di impegno civile, riconoscendo in primo luogo il ruolo sociale della musica e
                                sostenendo, ove possibile, il percorso artistico di giovani musicisti. <br/><br/>

                                Grazie alla collaborazione dei tanti amici, che già condividevano con Francesco e Anna tali
                                interessi, le prime attività dell’Associazione Framarè, sono state avviate presso il loro Liceo, per
                                l’anno scolastico 2019-2020, supportando il progetto formativo “Ascolti Fuoriclasse: La città e la
                                musica sulle orme di Anna e Francesco”, congiuntamente al Comitato Promotore della Fondazione
                                Anna Donzelli. “La città” è uno dei due sottoprogetti orientato ad esplorare quartieri di Roma per
                                “ascoltare” e fare esperienze dirette nei luoghi, allo scopo di sensibilizzare gli studenti sulle
                                tematiche della sostenibilità ambientale, discriminazioni di genere e migrazioni - “La musica” aveva
                                come obiettivo l’educazione all’ascolto, con una panoramica sulle diverse modalità di fruizione
                                musicale nel tempo, fino a nuove forme di ascolto, grazie a veri e propri viaggi esperienziali.
                                <br/><br/>
                                Purtroppo, la pandemia non ha consentito di proseguire molte delle attività desiderate e
                                programmate, ma in occasione del primo anno di vita dell’Associazione, considerata la possibilità
                                di sfruttare gli accessi ad eventi musicali solo via web, i musicisti e gli amici di Anna e Francesco
                                hanno realizzato una web-radio che ha accompagnato il periodo natalizio 2020 con brani musicali,
                                spesso selezionati per ricordare alcune tappe importanti del percorso artistico del musicista o a
                                testimoniare l’amicizia di vari musicisti (vedi link). Si ringraziano in proposito per la loro squisita
                                disponibilità e sensibilità il musicista Claudio De Rosa, stimato jazzista e amico, per il brano
                                dedicato a Anna e Francesco, intitolato Forever Young, nell’album “Forces”, 2019 e la poliedrica
                                musicista Stefania Tallini, già insegnante di musica di Anna, per il brano dedicato ad “Anna”
                                pubblicato nell’album “Uneven”, 2020.
                            </p> <br/><br/>
                        </Col>
                        <Col xs={12} md={3}></Col>
                    </Row>
                </Container>
            </div>

        )
    }
}