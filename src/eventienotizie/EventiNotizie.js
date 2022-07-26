import React, { Component } from 'react';
import {Container,Row,Col} from "react-bootstrap";
import "./eventinotizie.css"
import foto9 from '../assets/foto/fra9.jpg';
import foto10 from '../assets/foto/fra10.jpg';
import sl from '../assets/saintL.png';
import targa from '../assets/foto/Targa.jpg';
import separator from '../assets/paint-brush-stroke-4-23.png';
import locandina1agostocelimontana from '../assets/foto/Concerto1agosto2022sAxFriends.png'

export class EventiNotizie extends Component {
    render() {
        return(
            <div>
                <Container className={"maxSize pageContainer"} id={"eventinotizie"}>
                    <h2 className={"title"}>Eventi e notizie</h2>
                    <br/><br/>
                    <Container className={"event"}>
                        <Row>
                            <Col xs={12} md={2}></Col>
                            <Col xs={12} md={8}>
                                <h4 className={"text-center"}>Note di mezza estate. Concerto per sax &amp; friends</h4>
                                <img src={locandina1agostocelimontana} alt="" className={"foto"}/>
                                <br/><br/>
                                <p>
                                    Spaziando fra le sonorità del jazz e della classica, del cantautorato e del rock progressivo,
                                    giovani talenti della scena romana si alternano in formazioni diverse che accompagnano il
                                    pubblico in un’originale esplorazione delle potenzialità tecniche ed espressive del
                                    sassofono.<br/><br/>
                                    L’evento, promosso dall’Associazione Framarè e dalla Fondazione Anna Donzelli, in
                                    collaborazione con Village Celimontana, che si ringrazia per la calorosa disponibilità ad
                                    accogliere lo spirito dell’iniziativa, è il primo passo del progetto Note di mezza estate, che
                                    mette al centro la funzione sociale della musica, intesa come fecondo incontro di persone
                                    e culture diverse, alla maniera di Anna Donzelli e Francesco Maresca, cui il concerto è
                                    dedicato.
                                </p>

                                <p>
                                    Evento ospitato da Village Celimontana e promosso da @AssociazioneFramare (pagina) e
                                    Fondazione Anna Donzelli.
                                    <br/><br/>
                                    <h4><i>Con la partecipazione di:</i></h4><br/>
                                    Voci:<br/>
                                    <a href="https://www.facebook.com/johnnydalbasso1">Johnny DalBasso</a><br/>
                                    Valentina Gargano<br/>
                                    <br/>
                                    Sax:<br/>
                                    <a href="https://www.facebook.com/simone.bellagamba.14">Simone Bellagamba</a>
                                    <br/>
                                    <a href="https://www.facebook.com/el.berna.3">Ivan Bernardini</a><br/>
                                    <a href="https://www.facebook.com/marco.bonelli.35">Marco Bonelli</a><br/>
                                    <a href="https://www.facebook.com/cosimo.fiaschi.71">Cosimo Fiaschi</a><br/>
                                    <br/>
                                    Archi:<br/>
                                    <a href="https://www.facebook.com/maddalena.fogacciceli">Maddalena Fogacci Celi</a><br/>
                                    <a href="https://www.facebook.com/ludovica.luppi">Ludovica Luppi</a><br/>
                                    <a href="https://www.facebook.com/profile.php?id=100006255105921">Chiara Mazzocchi</a><br/>
                                    <a href="https://www.facebook.com/elisabetta.paolini.7">Elisabetta Paolini</a><br/>
                                    <br/>
                                    Chitarre:<br/>
                                    <a href="https://www.facebook.com/emanuelecasaliartist">Emanuele Casali - artist</a><br/>
                                    <a href="https://www.facebook.com/michele.proietti.315">Michele Proietti</a><br/>
                                    <br/>
                                    Tastiere:<br/>
                                    <a href="https://www.facebook.com/emanuele.guarnieri">Emanuele Guarnieri</a><br/>
                                    <br/>
                                    Tromba:<br/>
                                    <a href="https://www.facebook.com/frnlvc">Ludovico Franco</a><br/>
                                    <br/>
                                    Basso:<br/>
                                    <a href="https://www.facebook.com/andreacasali25">Andrea Casali</a><br/>
                                    <br/>
                                    Modulari:<br/>
                                    <a href="https://www.facebook.com/ruggerofornarimusic">Ruggero Fornari</a><br/>
                                    <br/>
                                    E con la <a href="https://www.facebook.com/profile.php?id=100078369005420">Metropolitan Jazz Orchestra</a><br/>
                                    Diretta da Antonello Sorrentino<br/>
                                    <br/>
                                    Arrangiamenti di:<br/>
                                    <a href="https://www.facebook.com/marco.bonelli.35">Marco Bonelli</a><br/>
                                    <a href="https://www.facebook.com/james.scocciaferro.9">Giordano De Nisi</a><br/>
                                    <a href="https://www.facebook.com/profile.php?id=100063697626381">Valentina Ramunno</a><br/>
                                    <a href="https://www.facebook.com/spesale.music">Alessandro Speranza Music</a><br/>
                                    <br/>
                                    Programma, organizzazione e coordinamento: <a href="https://www.facebook.com/profile.php?id=1657748989">Emma Passi</a>,
                                    <a href="https://www.facebook.com/michele.proietti.315"> Michele Proietti</a>, <a href="https://www.facebook.com/profile.php?id=1192266981">Paolo Zani</a>
                                </p>
                            </Col>
                            <Col xs={12} md={2}></Col>
                        </Row>
                    </Container>

                    <Row>
                        <Col xs={12} md={4} className={"pl0 pr0"}></Col>
                        <Col xs={12} md={4} className={"pl0 pr0"}>
                            <img src={separator} alt="" className={"separator"}/>
                        </Col>
                    </Row>

                    <Container className={"event"}>
                        <Row>
                            <Col xs={12} md={2}></Col>
                            <Col xs={12} md={8}>
                                <p>
                                    Il 26 giugno 2019, gli amici di Matemù, il centro giovani e scuola d’arte del CIES ci hanno fatto una
                                    bella sorpresa: hanno inaugurato nella loro sede una nuova stanza musicale dedicata a Francesco e Anna,
                                     affinchè la loro musica continui … <br/><br/>
                                    Ringraziamo di cuore gli amici di <a href="https://www.cies.it/matemu/">Matemù</a> per la grande sensibilità e l’affetto sincero che sanno regalare a tutti e vi invitiamo a seguire le loro preziose iniziative per tutti i ragazzi,
                                    per costruire comunità e integrazione grazie all’arte e alla musica.
                                    Francesco aveva condiviso con molti ragazzi e musicisti di Matemù (il carissimo Carlo Conti) il sogno di potersi esprimere con il
                                    suo sax condividendo il magnifico spirito di gruppo che si respira in questo centro giovanile.
                                    <img src={targa} alt="" className={"foto"}/>
                                </p> 
                            </Col>
                            <Col xs={12} md={2}></Col>
                        </Row>
                    </Container>
                    <Row>
                        <Col xs={12} md={4} className={"pl0 pr0"}></Col>
                        <Col xs={12} md={4} className={"pl0 pr0"}>
                            <img src={separator} alt="" className={"separator"}/>
                        </Col>
                    </Row>
                    <Container className={"event"}>
                        <Row>
                            <Col xs={12} md={2}></Col>
                            <Col xs={12} md={8}>
                               <p>  
Il 29 giugno 2019 la <a href="https://www.slmc.it">Scuola di musica Saint Louis College of Music</a> ha conferito la laurea postuma a Francesco,
 dedicando all’evento una specifica serata al Monk.<br/><br/>
Event Name: Il mio concerto per voi. “Il grande sogno di fare musica”<br/>
Event Date: 29 Giugno 2019 18:30 - 23:59<br/>
<a href="https://www.slmc.it/events/il-mio-concerto-per-voi-il-grande-sogno-di-fare-musica/">Link</a>
<img src={foto10} alt="" className={"foto"}/>
<br/><br/>
Oltre alla presentazione della tesi - che è stata completata anche grazie al contributo di amici (Ludovico, Emanuele, Marco e Andrea) 
sotto la guida esperta del Professore e relatore Vincenzo Presta, - è stato eseguito il suo concerto di diploma, 
come l’aveva lui stesso progettato per l’intenzione di laurearsi a settembre 2018. 
Brani del bellissimo concerto - cui hanno partecipato con grande generosità molti dei musicisti, professori e amici della scuola di musica SLCM,
 e non solo, ricordandolo con grande affetto -, sono stati registrati e messi generosamente a disposizione dalla scuola (vedi  link <a href="https://youtu.be/JUw_4vRBmbw">https://youtu.be/JUw_4vRBmbw</a>, <a href="https://youtu.be/Zcwq6P1ftWI">https://youtu.be/Zcwq6P1ftWI</a>)
 <br/><br/>
Vogliamo ringraziare pubblicamente la scuola di musica Saint Louis College of Music, il suo direttore, i suoi preziosi professori e collaboratori e quanti si sono spesi con grande cuore affinché questo percorso di studio fosse comunque portato a termine. 
<img src={sl} alt="" className={"foto"}/>
                                </p> 
                            </Col>
                        </Row>
                    </Container>
                    <Row>
                        <Col xs={12} md={4} className={"pl0 pr0"}></Col>
                        <Col xs={12} md={4} className={"pl0 pr0"}>
                            <img src={separator} alt="" className={"separator"}/>
                        </Col>
                    </Row>
                    <Container className={"event"}>
                        <Row>
                            <Col xs={12} md={2}></Col>
                            <Col xs={12} md={8}>
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
                            <Col xs={12} md={2}></Col>
                        </Row>
                        <Row>
                        <Col xs={12} md={2} className={"pl0 pr0"}></Col>
                        <Col xs={12} md={8} className={"pl0 pr0"}>
                            <img src={foto9} alt="" className={"foto"}/>
                        </Col>
                        </Row>
                    </Container>
                {/*
                <Container className={"event"}>
                    <Row>
                        <Col xs={12} md={2}></Col>
                        <Col xs={12} md={8}>
                            <p>
                                
                            </p> 
                        </Col>
                        <Col xs={12} md={2}></Col>
                    </Row>
                    <Row>
                    <Col xs={12} md={2} className={"pl0 pr0"}></Col>
                    <Col xs={12} md={8} className={"pl0 pr0"}>
                        <img src={foto9} alt="" className={"foto"}/>
                    </Col>
                    </Row>
                </Container>
                */}
            </Container>
        </div>

        )
    }
}
