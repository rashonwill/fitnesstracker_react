import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import "./components/All.css";
import Modal from "react-modal";

import Home from "./components/Home";
import LoginReg from "./components/LoginReg";
import Routines from "./components/Routines";
import MyRoutines from "./components/MyRoutines";
import Activities from "./components/Activities";

const App = () => {
  const [newRoutine, setnewRoutine] = useState(false);
  const [newActivity, setnewActivity] = useState(false);
  const [uploadOpts, setuploadOpts] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [unauthenticated, setunAuthenticated] = useState(false);

  // useEffect(() => {
  //   if (!JSON.parse(localStorage.getItem("authToken"))) {
  //     setAuthenticated(true);
  //   } else {
  //     setAuthenticated(false);
  //   }
  // }, []);

  return (
    <div id="app">
      {/* {authenticated && (
        <> */}
      <header>
        <div class="upload">
          <button
            class="btn-upload"
            onClick={() => {
              setuploadOpts(true);
            }}
          >
            <i class="fa fa-file-text" aria-hidden="true"></i>
          </button>
        </div>

        <Modal
          style={{ opacity: 1 }}
          isOpen={uploadOpts}
          onRequestClose={() => setuploadOpts(false)}
        >
          <div class="uploads">
            <button
              class="cancel"
              onClick={() => {
                setuploadOpts(false);
              }}
            >
              Close
            </button>

            <div class="options">
              <button
                class="btn2"
                id="activity"
                onClick={() => {
                  setnewActivity(true);
                  setuploadOpts(false);
                }}
              >
                New Activity
              </button>
              <button
                class="btn2"
                id="routine"
                onClick={() => {
                  setnewRoutine(true);
                  setuploadOpts(false);
                }}
              >
                New Routine
              </button>
            </div>
          </div>
        </Modal>

        <Modal
          style={{ opacity: 1 }}
          isOpen={newRoutine}
          onRequestClose={() => setnewRoutine(false)}
        >
          <div class="upload-form">
            <button
              class="cancel"
              onClick={() => {
                setnewRoutine(false);
              }}
            >
              Close
            </button>

            <form class="new-routine">
              <h1> New Routine</h1>
              <div>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Goal" />
              </div>
              <div class="radio-btn">
                <input type="checkbox" />
                <label>Public</label>

                <input type="checkbox" />
                <label>Private </label>
              </div>
              <button type="submit" class="btn-sub">
                Submit
              </button>
              <h5
                id="link-act"
                onClick={() => {
                  setnewActivity(true);
                  setnewRoutine(false);
                }}
              >
                Want to add a new activity? Click Here...
              </h5>
            </form>
          </div>
        </Modal>

        <Modal
          style={{ opacity: 1 }}
          isOpen={newActivity}
          onRequestClose={() => setnewActivity(false)}
        >
          <div class="upload-form">
            <button
              class="cancel"
              onClick={() => {
                setnewActivity(false);
              }}
            >
              Close
            </button>
            <form class="new-activity">
              <h1> New Activity</h1>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Description" />
              <input type="text" placeholder="Duration" />
              <input type="text" placeholder="Count" />
              <div class="act-newSub">
                <button type="submit" class="btn-sub">
                  Submit
                </button>
                <h5
                  id="link-rou"
                  onClick={() => {
                    setnewRoutine(true);
                    setnewActivity(false);
                  }}
                >
                  Want to add a new routine? Click Here...
                </h5>
              </div>
            </form>
          </div>
        </Modal>

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

        <div class="logout">
          <button
            class="btn"
            id="signout"
            onClick={() => {
              setunAuthenticated(true);
              <Redirect to="/" />;
            }}
          >
            <i class="fa fa-sign-out" aria-hidden="true"></i> Logout
          </button>
        </div>
      </header>
      {/* </>
      )} */}

      <body>
        <div class="feed">
          <Switch>
            <Route exact path="/">
              <LoginReg />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>
            <div class="post">
              <Route path="/routines">
                <Routines />
              </Route>

              <Route path="/myroutines">
                <MyRoutines />
              </Route>

              <Route path="/activities">
                <Activities />
              </Route>
            </div>
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
