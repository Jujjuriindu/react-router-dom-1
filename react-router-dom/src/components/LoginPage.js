import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function LoginPage() {
  return (
    <div>
      <Navigation></Navigation>
      <form>
        <h1>Login</h1>
        <div>
          <label>Username:</label>
          <input type="text" placeholder="Enter your Username"></input>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your Password"></input>
        </div>
        <h4>Forget Password?</h4>
        <div>
          <button className="loginButton" type="button">
            Login
          </button>
        </div>
        <h4>Not a Member ? </h4>
        <div>
          <Link to="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
