import React, { Component } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import "./cosafacciamo.css"
import foto from '../assets/foto/fra3.jpeg';

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
                                L’associazione promuove attività ed eventi di carattere culturale e musicale, e di impegno civile,
                                riconoscendo in primo luogo il ruolo sociale della musica e sostenendo, ove possibile, il percorso
                                artistico di giovani talenti. Tra le finalità costitutive dell’associazione vi sono soprattutto quelle
                                civiche, solidaristiche e di utilità sociale, di sostegno e diffusione della cultura, in particolare
                                musicale, e della pratica del volontariato. <br/><br/>
                                Grazie alla collaborazione dei tanti amici che condividevano impegno e interessi con Francesco e
                                Anna, le prime attività dell’Associazione Framarè, sono state avviate presso il loro Liceo T. Tasso
                                di Roma. Nell’anno 2019-20 è stato lanciato il progetto formativo “Ascolti Fuoriclasse: La città e la
                                musica sulle orme di Anna e Francesco”, insieme al Comitato Promotore della Fondazione Anna
                                Donzelli. “La città”, uno dei due filoni del progetto, era orientato a esplorare alcuni quartieri di
                                Roma per “ascoltare” e fare esperienze dirette nei differenti luoghi, allo scopo di sensibilizzare gli
                                studenti sulle tematiche della sostenibilità ambientale, delle discriminazioni di genere e delle
                                migrazioni; “La musica” aveva invece come obiettivo l’educazione all’ascolto, con una panoramica
                                sulle modalità di fruizione musicale nelle diverse epoche, fino alle nuove forme di ascolto,
                                attraverso veri e propri viaggi esperienziali.<br/><br/>
                                Purtroppo, la pandemia non ha consentito di proseguire molte delle attività programmate, ma per
                                celebrare il primo anno di vita dell’Associazione, sfruttando gli accessi ad eventi musicali solo via
                                web, i musicisti e gli amici di Francesco e Anna hanno realizzato una web-radio che ha
                                accompagnato il periodo natalizio 2020 con brani musicali, selezionati in ricordo di alcune tappe
                                importanti del percorso artistico del musicista e dei suoi legami con la comunità dei giovani colleghi
                                e degli amici. Si ringraziano in proposito per la loro preziosa disponibilità e sensibilità Claudio De
                                Rosa, stimato jazzista e amico, per il brano “Forever Young” dedicato a Anna e Francesco
                                nell’album Forces (2019) e Stefania Tallini, pianista e compositrice per il brano dedicato alla sua
                                amica e allieva “Anna” pubblicato nell’album Uneven (2020).
                            </p>
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
