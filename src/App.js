import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="projects">Projects</Link>

        <Switch>
          <Route exact path="/">
            <h1>Hello from Home</h1>
          </Route>

          <Route exact path="about">
            <h1>Hello from About</h1>
          </Route>

          <Route exact path="/projects">
            <Project />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
