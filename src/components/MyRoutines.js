import React from "react";

import "./MyRoutines.css";

const MyRoutines = () => {
  return (
    <>
      <div class="myroutines-post">
        <img
          id="fitness-gif"
          src="https://i.pinimg.com/originals/6f/8e/de/6f8ede4dab23b0518f0efc61e5810d71.gif"
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
            <p style={{ width: "40%" }} data-value="40">
              Triceps
            </p>
            <progress max="100" value="40" class="html5">
              <div class="progress-bar">
                <span style={{ width: "40%" }}>40%</span>
              </div>
            </progress>
            <footer class="goal">Goal</footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyRoutines;
