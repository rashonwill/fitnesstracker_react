import React from "react";

import $ from "react-jquery-plugin";

import "./All.css";

const Home = () => {
  return (
    <>
      <div class="title">
        <h1> Our Combinded Users Success Percentage </h1>
      </div>
      <img
        id="fitness-gif"
        src="https://cdn.dribbble.com/users/159027/screenshots/3866020/run-dribbble_3.gif"
      />

      <div class="progressbar">
        <div class="circle">
          <div class="bar"></div>
          <div class="box">
            <span>73%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
