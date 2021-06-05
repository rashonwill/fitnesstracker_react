import React from "react";

import "./All.css";

const MyRoutines = () => {
  return (
    <>
      <img
        id="fitness-gif"
        src="https://i.pinimg.com/originals/6f/8e/de/6f8ede4dab23b0518f0efc61e5810d71.gif"
      />

      <div class="card routines">
        <div class="author">
          <h1> Creator Name </h1>
          <h3> Routine Name </h3>
          <small> Goal </small>
        </div>

        <div id="edits">
          <button class="edit-btn">
            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
          </button>
          <ul class="edit-options">
            <li>
              <button>
                <i class="fa fa-pencil-square" aria-hidden="true"></i>Edit
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
          <h3> Acitiviy Name </h3>
          <small> Description </small>
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
    </>
  );
};

export default MyRoutines;
