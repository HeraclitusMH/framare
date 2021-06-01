import React, { Component } from 'react';
import './topmenu.css';
import {Link} from 'react-router-dom';
import {Container,Row,Col, Dropdown} from "react-bootstrap";

export class Topmenu extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedMenuLink: "no-link-selected"
        };
    }

    activeMenu = (e) => {
        let elem = e.target
        this.selectCurrentActive(elem)
    }

    activeParentMenu = (id) => {
        let elem = document.getElementById(id)
        this.selectCurrentActive(elem)

    }

    selectCurrentActive = (elem) => {
        if(this.state.selectedMenuLink !== "no-link-selected"){
            this.state.selectedMenuLink.classList.remove("selected")
            this.state.selectedMenuLink = elem
            elem.classList.add("selected")
        } else {
            this.state.selectedMenuLink = elem
            elem.classList.add("selected")
        }
    }

    render() {
        return(
        <Container className={"top-menu-container"}>
            <Row className={"top-menu-logo-row"}>
                <Col xs={12} md={3}></Col>
                <Col className={"top-logo"} xs={12} md={6}></Col>
                <Col xs={12} md={3}></Col>
            </Row>

            <Row className={"top-menu-list"}>
                <Col xs={12} sm={12} md={{span:2}} className={"colMenuLink"} id={"homeLinkMenu"}>
                    <Dropdown className={"dropdownButton no-drop"}>
                        <Dropdown.Toggle className="dropdown-custom-components">
                            <Link className={"brush2"} to={"/home"} onClick={this.activeMenu}>Home</Link>
                        </Dropdown.Toggle>
                    </Dropdown>
                </Col>
                <Col xs={12} sm={12} md={2} className={"colMenuLink"}>
                    <Dropdown className={"dropdownButton chi-siamo-dropdown"}>
                        <Dropdown.Toggle className="dropdown-custom-components">
                            <Link id="chisiamoMenuLink" className={"brush1"} to="/chisiamo" onClick={this.activeMenu}>Chi Siamo</Link>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="1" to="/associazionetrasparente" onClick={()=>document.getElementById('associazioneTrasparenteMenuLink').click()}>
                                <Link id="associazioneTrasparenteMenuLink" onClick={()=>this.activeParentMenu("chisiamoMenuLink")} to="/associazionetrasparente">Associazione trasparente</Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="2" to="/unisciti" onClick={()=>document.getElementById('uniscitiMenuLink').click()}>
                                <Link id="uniscitiMenuLink" onClick={()=>this.activeParentMenu("chisiamoMenuLink")} to="/unisciti">Vieni con noi</Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col xs={12} sm={12} md={3}>
                    <Dropdown className={"dropdownButton"}>
                        <Dropdown.Toggle className="dropdown-custom-components" to="/cosafacciamo">
                            <Link id="cosafacciamoMenuLink" to="/cosafacciamo" className={"brush1"} onClick={this.activeMenu}>Cosa facciamo</Link>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="2" to="/link" onClick={()=>document.getElementById('linkMenuLink').click()}>
                                <Link id="linkMenuLink" to="/link" onClick={()=>this.activeParentMenu("cosafacciamoMenuLink")}>Link (Selezioni musicali)</Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="3" to="/galleria" onClick={()=>document.getElementById('galleriaMenuLink').click()}>
                                <Link id="galleriaMenuLink" to="/galleria" onClick={()=>this.activeParentMenu("cosafacciamoMenuLink")}>Galleria</Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="4" to="/social" onClick={()=>document.getElementById('socialMenuLink').click()}>
                                <Link id="socialMenuLink" to="/social" onClick={()=>this.activeParentMenu("cosafacciamoMenuLink")}>Social</Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col xs={12} sm={12} md={3}>
                    <Dropdown className={"dropdownButton"}>
                        <Dropdown.Toggle className="dropdown-custom-components" to="/eventinotizie">
                            <Link id="eventinotizieMenuLink" to="/eventinotizie" className={"brush1"} onClick={this.activeMenu}>Eventi e notizie</Link>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="1" to="/comunicazioni" onClick={()=>document.getElementById('comunicazioniMenuLink').click()}>
                                <Link id="comunicazioniMenuLink" to="/comunicazioni" onClick={()=>this.activeParentMenu("eventinotizieMenuLink")} >Comunicazioni</Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col xs={12} sm={12} md={2}>
                    <Dropdown className={"dropdownButton no-drop"}>
                        <Dropdown.Toggle className="dropdown-custom-components" to="/contatti">
                            <Link to="/contatti" className={"brush2"} onClick={this.activeMenu}>Contatti</Link>
                        </Dropdown.Toggle>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
        )
    }
}
