import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
import Jobs from "./Pages/Jobs/Jobs";
import About from "./Pages/About/About";
import Auth from "./Pages/Auth/Auth";
import Profile from "./Pages/Profile/Profile";

// Global Commponents
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";

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
        <Route exact path="/auth">
          <Auth />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
