import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./index.css";

import Home from "./components/Home";
import UploadsPage from "./components/UploadsPage";
import LoginReg from "./components/LoginReg";
import Routines from "./components/Routines";
import MyRoutines from "./components/MyRoutines";
import Activities from "./components/Activities";

const App = () => {
  return (
    <div id="app">
      <header>
        <div class="upload">
          <button class="btn-upload" component={UploadsPage}>
            <i class="fa fa-file-text" aria-hidden="true"></i>
          </button>
        </div>
        <Link to="/home">
          <button class="btn" id="home">
            Home
          </button>
        </Link>
        <Link to="/routines">
          <button class="btn" id="routines">
            Routines
          </button>
        </Link>
        <Link to="/myroutines">
          <button class="btn" id="myroutines">
            My Routines
          </button>
        </Link>
        <Link to="/activities">
          <button class="btn" id="activities">
            Activities
          </button>
        </Link>
        <div class="mode">
          <label for="Description">Dark Mode</label>
          <div class="theme-switch">
            <button
              onClick="darkMode();"
              class="switch"
              id="active"
              value="Off"
            ></button>
          </div>
        </div>
      </header>

      <body>
        <div class="feed">
          <Switch>
            <Route exact path="/" component={LoginReg}>
              <LoginReg />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>

            <Route path="/routines">
              <Routines />
            </Route>

            <Route path="/myroutines">
              <MyRoutines />
            </Route>

            <Route path="/activities">
              <Activities />
            </Route>
          </Switch>
        </div>
      </body>
    </div>
  );
};

ReactDom.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("app")
);
