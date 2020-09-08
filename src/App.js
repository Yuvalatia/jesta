import React, { useState, useEffect } from "react";
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

// Context
import UserContext from "./context/UserContext";

// Services
import { getUserDetailsByToken } from "./services/user.service";

import "./App.css";
function App() {
  const [userData, setUserData] = useState({
    token: null,
    user: null,
  });

  useEffect(() => {
    // component did mount - runs only once
    const checkLoggedIn = async () => {
      if (localStorage.getItem("token") !== null) {
        const token = localStorage.getItem("token"); // user token
        try {
          const response = await getUserDetailsByToken(token);

          setUserData({ token, user: response.user });
        } catch (err) {
          if (err.response.data.message) {
            console.log(err.response.data.message);
          }
        }
      }
    };
    checkLoggedIn();
  }, []);
  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
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
          {/* Route not found */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
