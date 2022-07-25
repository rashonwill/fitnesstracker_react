import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";

import "./All.css";

const Routines = () => {
  const [routines, setRoutines] = useState();
  useEffect(async () => {
    axios
      .get(`${process.env.REACT_APP_FITNESS_TRACKER_API_URL}/routines`)
      .then(({ data }) => {
        if (data.length) {
          setRoutines(data);
        }
      });
  }, []);

  return (
    <>
      <img
        id="fitness-gif"
        src="https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1586410730/content-items/004/129/014/Male-Jabber-Jab-Gym-original.gif?1586410730"
      />

      {routines && routines.length > 0
        ? routines.map((routine) => {
            return (
              <div class="card routines">
                <div class="author">
                  <h1> {routine.creatorName} </h1>
                  <h3> {routine.name} </h3>
                  <small>{routine.goal} </small>
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

export default Routines;
