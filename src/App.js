import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home/Home";
import Music from "./pages/Music/Music";
import WebDev from "./pages/WebDev/WebDev";
import Contact from "./pages/Contact/Contact";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper/Wrapper";




function App() {
  return (
    <div className="App">
      <div id="jumbotron"></div>
      <Wrapper>
    <Router>
    <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/webdevelopment" component={WebDev} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
    </Router>
      <Footer />
      </Wrapper>
      </div>
  );
}



export default App;