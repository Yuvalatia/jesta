import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Pages
import Home from "./Pages/Home/Home";
import Jobs from "./Pages/Jobs/Jobs";
import About from "./Pages/About/About";

// Global Commponents
import Header from "./Shared/Header";

import "./App.css";
function App() {
  return (
    <Router>
      
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/jobs">
            <Jobs />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
