import React from "react";
import { useState } from "react";
import Modal from "react-modal";

import "./All.css";

const UploadsPage = () => {
  const [uploads, setopenUploads] = useState(false);
  return (
    <>
      <Modal
        style={{ opacity: 1 }}
        isOpen={uploads}
        onRequestClose={() => setopenUploads(false)}
      >
        <div class="uploads">
          <button class="cancel">&#10060</button>

          <div class="options">
            <button class="btn2" id="activity">
              New Activity
            </button>
            <button class="btn2" id="routine">
              New Routine
            </button>
          </div>

          <div class="upload-form">
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
              <h5 id="link-act">Want to add a new activity? Click Here...</h5>
            </form>
            <form class="new-activity">
              <h1> New Activity</h1>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Description" />
              <input type="text" placeholder="Duration" />
              <input type="text" placeholder="Count" />
              <button type="submit" class="btn-sub">
                Submit
              </button>
              <h5 id="link-rou">Want to add a new routine? Click Here...</h5>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UploadsPage;
