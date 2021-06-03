import React from "react";

import "./Routines.css";

const Routines = () => {
  return (
    <>
      <div class="routines-post">
        <img
          id="fitness-gif"
          src="https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1586410730/content-items/004/129/014/Male-Jabber-Jab-Gym-original.gif?1586410730"
        />

        <div class="post-card">
          <div class="author">
            <img
              class="avi"
              src="http://cdn.onlinewebfonts.com/svg/img_258083.png"
            />
            <h4>name</h4>
          </div>
          <div class="content">
            <p style={{ width: "80%" }} data-value="80">
              Chest Day
            </p>
            <progress max="100" value="80" class="html5">
              <div class="progress-bar">
                <span style={{ width: "80%" }}>80%</span>
              </div>
            </progress>
            <footer class="goal">Goal</footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Routines;
