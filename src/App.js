import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Music from "./pages/Music";
// import WebDev from "./pages/WebDev";
// import Contact from "./pages/Contact";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            {/* <Route exact path="/music" component={Music} />
            <Route exact path="/webdevelopment" component={WebDev} />
            <Route exact path="/contact" component={Contact} /> */}
          </Switch>
      </div>
    </Router>
  );
}

export default App;