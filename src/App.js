import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Music from "./pages/Music/Music";
import WebDev from "./pages/WebDev/WebDev";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";




function App() {
  return (
    <div className="App">
    <Router>
    <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/webdevelopment" component={WebDev} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
    </Router>
      <Footer />
      </div>
  );
}



export default App;