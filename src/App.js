import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home/Home";
import Music from "./pages/Music/Music";
import WebDev from "./pages/WebDev/WebDev";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper/Wrapper";


function App() {
  return (
    <div className="App">
      <Wrapper>
    <Router>
    <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/webdevelopment" component={WebDev} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
    </Router>
      </Wrapper>
      </div>
  );
}



export default App;