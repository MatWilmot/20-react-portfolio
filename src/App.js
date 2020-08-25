import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route exact path="/about">
            <AboutPage />
          </Route>

          <Route exact path="/projects">
            <ProjectPage />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
