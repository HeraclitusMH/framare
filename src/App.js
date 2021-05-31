import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Topmenu} from './topmenu/Topmenu'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Chisiamo} from "./chisiamo/Chisiamo";
import {Footer} from "./footer/Footer";
import {Home} from "./home/Home";
import {AssociazioneTrasparente} from "./associazioneTrasparente/AssociazioneTrasparente";
import {Unisciti} from "./unisciti/Unisciti";
import {CosaFacciamo} from "./cosafacciamo/CosaFacciamo";
import {EventiNotizie} from "./eventienotizie/EventiNotizie";
import {LinkMusicali} from "./link/LinkMusicali";
import {Galleria} from "./galleria/Galleria";
import {Social} from "./social/Social";
import {Comunicazioni} from "./comunicazioni/Comunicazioni";
import {Contatti} from "./contatti/Contatti";

function App() {
  return (
      <div className="App">
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Cormorant+Unicase:wght@300&display=swap" rel="stylesheet"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <BrowserRouter>
              <Topmenu></Topmenu>
              <Switch>
                  <Route exact path="/">
                      <Home></Home>
                  </Route>
                  <Route path="/home">
                      <Home></Home>
                  </Route>
                  <Route path="/chisiamo">
                      <Chisiamo></Chisiamo>
                  </Route>
                  <Route path="/associazionetrasparente">
                      <AssociazioneTrasparente></AssociazioneTrasparente>
                  </Route>
                  <Route path="/unisciti">
                      <Unisciti></Unisciti>
                  </Route>
                  <Route path="/cosafacciamo">
                      <CosaFacciamo></CosaFacciamo>
                  </Route>
                  <Route path="/eventinotizie">
                      <EventiNotizie></EventiNotizie>
                  </Route>
                  <Route path="/link">
                      <LinkMusicali></LinkMusicali>
                  </Route>
                  <Route path="/galleria">
                      <Galleria></Galleria>
                  </Route>
                  <Route path="/social">
                      <Social></Social>
                  </Route>
                  <Route path="/comunicazioni">
                      <Comunicazioni></Comunicazioni>
                  </Route>
                  <Route path="/contatti">
                      <Contatti></Contatti>
                  </Route>
              </Switch>
          </BrowserRouter>
          <Footer></Footer>
    </div>
  );
}

export default App;
