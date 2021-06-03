import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./index.css";

import Menu from "./components/Menu";
import UploadsPage from "./components/UploadsPage";
import LoginReg from "./components/LoginReg";
import Routines from "./components/Routines";
import MyRoutines from "./components/MyRoutines";
import Activities from "./components/Activities";

const App = () => {
  return (
    <div id="app">
      <header component={Menu}>
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
        <Link to="/account">
          <button class="btn" id="account">
            Account
          </button>
        </Link>
      </header>

      <body>
        <div class="feed">
          <Route exact path="/home">
            <div class="home-post">
              <div class="title">
                <h1> Our Combinded Users Success Percentage </h1>
              </div>
              <img
                id="fitness-gif"
                src="https://cdn.dribbble.com/users/159027/screenshots/3866020/run-dribbble_3.gif"
              />

              <div class="success-bar">
                <div class="inner-circle">
                  <p>75%</p>
                </div>
              </div>
            </div>
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

          <Route path="/account">
            <LoginReg />
          </Route>
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
