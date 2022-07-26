import React, { Component } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import "./associazioneTrasparente.css"
import statuto from "../assets/pdf/StatutoAssociazioneFramarè.pdf"
import r2019 from "../assets/pdf/Rendiconto2019.pdf"
import r2020 from "../assets/pdf/Rendiconto2020.pdf"
import r2021 from "../assets/pdf/Rendiconto2021.pdf"
import statopat2021 from "../assets/pdf/Statopatrimoniale2021.pdf"

export class AssociazioneTrasparente extends Component {
    render() {
        return(
            <Container className={"maxSize pageContainer"} id={"associazioneTrasparente"}>
                <Row>
                    <Col xs={12} md={3}></Col>
                    <Col xs={12} md={6}>
                        <h2 className={"title"}>Associazione trasparente</h2> <br/><br/>
                        <p>
                            In questa pagina l’Associazione di Promozione Sociale Francesco Maresca - Framarè
                            APS rende pubblico il materiale secondo le normative vigenti ai fini di trasparenza e
                            diffusione dell’informazione.
                            <br/><br/>
                            L’Associazione Framarè APS, costituita in data 26 ottobre 2019, è stata iscritta al Registro
                            Unico Nazionale per il Terzo Settore.
                            <br/><br/>
                            <i>Ai sensi e per gli effetti dell’articolo 47 del D. Lgs n. 117/2017 e dell’articolo 9 del D.M. n.
                            106 del 15/09/2020 l’Ufficio Regionale del Runts Lazio ha provveduto con determina
                            all’iscrizione dell’Ente ASSOCIAZIONE DI PROMOZIONE SOCIALE FRANCESCO
                            MARESCA- FRAMARE&#39; APS (C.F. 96436370587; rep. n. 29550 prot. n.
                            0390481\21/04/2022) con sede in VIA TREVISO 33 00161 ROMA (RM), nella sezione
                            ASSOCIAZIONI DI PROMOZIONE SOCIALE del RUNTS.</i><br/><br/>
                            <a href={statuto}>Statuto dell’associazione Framarè Aps iscritta al Runts</a>
                            <br/><br/>
                            Rendiconti: <br/>
                            <a href={r2019}>Rendiconto 2019</a>, <a href={r2020}>Rendiconto 2020</a>, <a href={r2021}>Rendiconto 2021</a>, <a href={statopat2021}>Stato patrimoniale 2021</a>
                        </p>
                        <br/><br/>
                    </Col>
                    <Col xs={12} md={3}></Col>
                </Row>
            </Container>
        )
    }
}