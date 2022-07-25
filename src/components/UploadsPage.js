import React from "react";
import { useState } from "react";
import Modal from "react-modal";

import "./All.css";

const UploadsPage = () => {
  const [uploadOptions, setuploadOptions] = useState(true);
  const [uploads, setopenUploads] = useState(false);
  const [newRou, setNewRoutineOpen] = useState(false);
  const [newAct, setNewActivityOpen] = useState(false);
  const [message, setMessage] = useState();
  const [name, setRoutineName] = useState();
  const [goal, setRoutineGoal] = useState();
  const [isPublic, setRoutineStatus] = useState();
  const [description, setActivityDescription] = useState();
  const [duration, setActivityDuration] = useState();
  const [count, setActivityCount] = useState();
  const myToken = localStorage.getItem("fitToken");

  const createRoutine = async (event) => {
    event.preventDefault();
    let newRoutine = {
            name: name,
            goal: goal,
            isPublic: true,
    }
    
    console.log(newRoutine)
    try {
      const response = await fetch(
        `${process.env.REACT_APP_FITNESS_TRACKER_API_URL}/routines`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${myToken}`,
          },
          body: JSON.stringify(newRoutine),
        }
      );
      const data = await response.json();
      console.log(data);
      setMessage("Your new routine has been added.");
      return data;
    } catch (error) {
      setMessage("Oops, could not create routine, try again.");
      setTimeout(() => {
        $("#name").val("");
        $("#goal").val("");
        $(".messages").text("");
      }, 3000);
    }
  };

  const onRoutineCreation = () => {
    createRoutine();
  };
  return (
    <>
    {uploadOptions ? (
        <div class="uploads">
          <button class="cancel">&#10060</button>

          <div class="options">
            <button class="btn2" id="activity" onClick={() => {
              setNewActivityOpen(true);
              setNewRoutineOpen(false);
            }}>
              New Activity
            </button>

            <button class="btn2" id="routine" onClick={() => {
              setNewActivityOpen(false);
              setNewRoutineOpen(true);
            }}>
              New Routine
            </button>

          </div>
</div>
    ) : null}
    
          <Modal
        style={{ opacity: 1 }}
        isOpen={newRou}
        onRequestClose={() => setNewRoutineOpen(false)}
      >

          <div class="upload-form">
            <form class="new-routine" onSubmit={onRoutineCreation}>
              <h1> New Routine</h1>
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  onInput={(event) => setRoutineName(event.target.value)}
                />
                <input
                  type="text"
                  id="goal"
                  placeholder="Goal"
                  onInput={(event) => setRoutineGoal(event.target.value)}
                />
              </div>
              <div class="radio-btn">
                <input
                  type="checkbox"
                  checked={checked}
                  value="true"
                  onInput={(event) => setRoutineStatus(event.target.value)}
                />
                <label>Public</label>

                <input
                  type="checkbox"
                  checked={checked}
                  value="false"
                  onInput={(event) => setRoutineStatus(event.target.value)}
                />
                <label>Private </label>
              </div>

              <div class="message">{message}</div>
              <button type="submit" class="btn-sub">
                Submit
              </button>
              <h5 id="link-act">Want to add a new activity? Click Here...</h5>
            </form>
              </div>
              </Modal>
              
                    <Modal
        style={{ opacity: 1 }}
        isOpen={newAct}
        onRequestClose={() => setNewActivityOpen(false)}
      >
              <div class="upload-form">
            <form class="new-activity" onSubmit={activityCreation}>
              <h1> New Activity</h1>
              <input
                type="text"
                placeholder="Name"
                onInput={(event) => setActivityName(event.target.value)}
              />
              <input
                type="text"
                placeholder="Description"
                onInput={(event) => setActivityDescription(event.target.value)}
              />
              <input
                type="text"
                placeholder="Duration"
                onInput={(event) => setActivityDuration(event.target.value)}
              />
              <input
                type="text"
                placeholder="Count"
                onInput={(event) => setActivityCount(event.target.value)}
              />
              <div class="message">{message}</div>
              <button type="submit" class="btn-sub">
                Submit
              </button>
              <h5 id="link-rou">Want to add a new routine? Click Here...</h5>
            </form>
        </div>
              </Modal>
       
 
    </>
  );
};

export default UploadsPage;
