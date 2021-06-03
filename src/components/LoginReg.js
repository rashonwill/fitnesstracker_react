import React from "react";

import "./LoginReg.css";

const LoginReg = () => {
  return (
    <>
      <div class="options-reg">
        <button class="btn2" id="login">
          Log In
        </button>
        <button class="btn2" id="register">
          Register
        </button>
      </div>

      <div class="login-register">
        <button class="cancel">&#10060</button>
        <form class="login-form">
          <h1> Login </h1>
          <input type="username" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button class="btn" type="submit">
            Log In
          </button>
          <h5 id="link-reg">Don't have an Account? Register Here...</h5>
        </form>

        <form class="register-form">
          <h1> Register</h1>
          <input type="username" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button class="btn" type="submit">
            Register
          </button>
          <h5 id="link-log">Already have an Account? Login Here...</h5>
        </form>
      </div>
    </>
  );
};

export default LoginReg;
