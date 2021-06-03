import React from "react";

import "./Activities.css";

const Activities = () => {
  return (
    <>
      <div class="activities-post">
        <img
          id="fitness-gif"
          src="https://cdn.dribbble.com/users/1304577/screenshots/4227985/gym-guy-8x6.gif"
        />

        <div class="post-card-activity">
          <div class="author">
            <img
              class="avi"
              src="http://cdn.onlinewebfonts.com/svg/img_258083.png"
            />
            <h4>{name}</h4>
          </div>

          <div class="content">
            <div class="activity">Activity Name</div>
            <div class="success-bar-act">
              <div class="inner-circle-act">
                <p>Count: 350 Reps</p>
              </div>
            </div>

            <div class="success-bar-act2">
              <div class="inner-circle-act2">
                <p>Duration: 30 Minutes</p>
              </div>
            </div>
            <footer class="descript">Description</footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
