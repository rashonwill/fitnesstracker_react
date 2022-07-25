import React from "react";
import { useState } from "react";
import Modal from "react-modal";

import "./LoginReg.css";

const LoginReg = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [openLogin, setopenLogin] = useState(false);
  const [openRegister, setopenRegister] = useState(false);
  const [accountOptions, setaccountOptions] = useState(true);

  const registerUser = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_FITNESS_TRACKER_API_URL}/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      const data = await response.json();
      localStorage.setItem("fitToken", data.token);
      setMessage("Thanks for registering, return to login screen to login.");
    } catch (error) {
      setMessage("Oops, could not register user, please try again");
      setTimeout(() => {
        $("#regUsername").val("");
        $("#regPassword").val("");
        $(".messages").text("");
      }, 3000);
    }
  };

  const loginUser = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_FITNESS_TRACKER_API_URL}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      const data = await response.json();
      localStorage.setItem("fitToken", JSON.stringify(data.token));
      setMessage("Welcome, you are logged in!");
      window.location.href = "/home";
    } catch (error) {
      console.log(error);
      setMessage("Oops! could not log user in, please try again");
      setTimeout(() => {
        $("#username").val("");
        $("#password").val("");
        $(".messages").text("");
      }, 3000);
    }
  };
  const onRegSubmit = (event) => {
    event.preventDefault();
    registerUser();
  };

  const onLogSubmit = (event) => {
    event.preventDefault();
    loginUser();
  };

  return (
    <>
      <h1 id="fitnesstrk"> Fitness Tracker </h1>

      <img
        id="fitness"
        src="https://i.pinimg.com/originals/e4/38/d5/e438d548b3de392c3634a53a5aae74e1.gif"
      />

      <img
        id="fitness2"
        src="https://i.pinimg.com/originals/e4/38/d5/e438d548b3de392c3634a53a5aae74e1.gif"
      />

      {accountOptions ? (
        <div class="options-reg">
          <button
            class="btn2"
            id="login"
            onClick={() => {
              setopenLogin(true);
              setaccountOptions(false);
            }}
          >
            Log In
          </button>
          <button
            class="btn2"
            id="register"
            onClick={() => {
              setopenRegister(true);
              setaccountOptions(false);
            }}
          >
            Register
          </button>
        </div>
      ) : null}

      <Modal
        style={{ opacity: 1 }}
        isOpen={openLogin}
        onRequestClose={() => setopenLogin(false)}
      >
        <div class="login-register">
          <form class="login-form" onSubmit={onLogSubmit}>
            <h1> Login </h1>
            <input
              type="username"
              id="username"
              placeholder="Username"
              required
              onInput={(event) => setUsername(event.target.value)}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              onInput={(event) => setPassword(event.target.value)}
            />
            <div class="messages">{message}</div>
            <button class="btn" type="submit">
              Log In
            </button>
            <h5
              id="link-reg"
              onClick={() => {
                setopenRegister(true);
                setopenLogin(false);
              }}
            >
              Don't have an Account? Register Here...
            </h5>
          </form>
        </div>
      </Modal>

      <Modal
        style={{ opacity: 1 }}
        isOpen={openRegister}
        onRequestClose={() => setopenRegister(false)}
      >
        <div class="login-register">
          <form class="register-form" onSubmit={onRegSubmit}>
            <h1> Register</h1>
            <input
              type="username"
              id="regUsername"
              placeholder="Username"
              required
              onInput={(event) => setUsername(event.target.value)}
            />
            <input
              type="password"
              id="regPassword"
              placeholder="Password"
              required
              onInput={(event) => setPassword(event.target.value)}
            />
            <div class="messages">{message}</div>
            <button class="btn" type="submit">
              Register
            </button>
            <h5
              id="link-log"
              onClick={() => {
                setopenLogin(true);
                setopenRegister(false);
              }}
            >
              Already have an Account? Login Here...
            </h5>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default LoginReg;
