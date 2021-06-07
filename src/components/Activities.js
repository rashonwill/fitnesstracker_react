import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";

import "./All.css";

const Activities = () => {
  const [activities, setActivities] = useState();
  useEffect(async () => {
    axios
      .get(`${process.env.REACT_APP_FITNESS_TRACKER_API_URL}/activities`)
      .then(({ data }) => {
        if (data.length) {
          setActivities(data);
          console.log(data);
        }
      });
  }, []);
  return (
    <>
      <img
        id="fitness-gif"
        src="https://cdn.dribbble.com/users/1304577/screenshots/4227985/gym-guy-8x6.gif"
      />
      {activities && activities.length > 0
        ? activities.map((activity) => {
            return (
              <div class="card activities">
                <div class="activities-List">
                  <h1> {activity.name} </h1>
                  <small> {activity.description} </small>
                </div>
                <div class="activity-info">
                  <div class="progressbar-act">
                    <div class="circle-act">
                      <div class="bar-act"></div>
                      <div class="box-act">
                        <span>60% Results</span>
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

export default Activities;
