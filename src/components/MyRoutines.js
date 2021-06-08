import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import "./All.css";
const usernameFetch = (myToken) => {
  try {
    return axios
      .get(`${process.env.REACT_APP_FITNESS_TRACKR_API_URL}users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${myToken}`,
        },
      })
      .then(({ data: { username } }) => {
        return username;
      });
  } catch (err) {
    console.error("Oops, could not get username");
  }
};

const myRoutinesFetch = (username, myToken) => {
  try {
    return axios
      .get(
        `${process.env.REACT_APP_FITNESS_TRACKR_API_URL}users/${username}/routines`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${myToken}`,
          },
        }
      )
      .then(({ data }) => {
        return data;
      });
  } catch (err) {
    console.error("Oops, could not get users routines");
  }
};

const MyRoutines = () => {
  const [routines, setRoutines] = useState([]);
  useEffect(async () => {
    const myToken = JSON.parse(localStorage.getItem("authToken"));
    console.log(myToken);
    if (myToken) {
      const loggedInUser = await usernameFetch(myToken);
      const routines = await myRoutinesFetch(loggedInUser, myToken);
      setRoutines(routines);
    }
  }, []);

  return (
    <>
      <img
        id="fitness-gif"
        src="https://i.pinimg.com/originals/6f/8e/de/6f8ede4dab23b0518f0efc61e5810d71.gif"
      />

      {routines && routines.length > 0
        ? routines.map((routine) => {
            return (
              <div class="card routines">
                <div class="author">
                  <h1> {routine.creatorName} </h1>
                  <h3> {routine.name} </h3>
                  <small> {routine.goal} </small>
                </div>

                <div id="edits">
                  <button class="edit-btn">
                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                  </button>
                  <ul class="edit-options">
                    <li>
                      <button>
                        <i class="fa fa-pencil-square" aria-hidden="true"></i>
                        Edit
                      </button>
                    </li>
                    <li>
                      <button>
                        <i class="fa fa-trash" aria-hidden="true"></i>Delete
                      </button>
                    </li>
                  </ul>
                </div>

                <div class="activity">
                  <h3> {routine.activities.name} </h3>
                  <small> {routine.activities.description} </small>
                </div>
                <div class="activity-info">
                  <div class="progressbar-card">
                    <div class="circle-card">
                      <div class="bar-card"></div>
                      <div class="box-card">
                        <span>80% Results</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};

export default MyRoutines;
