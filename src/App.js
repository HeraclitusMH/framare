import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Topmenu} from './topmenu/Topmenu'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Chisiamo} from "./chisiamo/Chisiamo";
import {Footer} from "./footer/Footer";
import {Home} from "./home/Home";

function App() {
  return (
      <div className="App">
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
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
              </Switch>
          </BrowserRouter>
          <Footer></Footer>
    </div>
  );
}

export default App;
