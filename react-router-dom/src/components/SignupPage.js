import React from "react";
import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <div>
      <form>
        <h1>Sign up</h1>
        <h4>Sign up to continue</h4>
        <div>
          <label>First Name:</label>
          <input type="text" placeholder="Enter your First Name"></input>
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" placeholder="Enter your Last Name"></input>
        </div>
        <div>
          <label>Email:</label>
          <input type="text" placeholder="Enter your Email"></input>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your Password"></input>
        </div>
        <div>
          <button className="buttonType" type="button">
            Sign up
          </button>
        </div>
        <div>
          <input type="checkbox"></input>
          <label className="rememberMe">Remember me</label>
        </div>
        <div>
          <button className="googleButton" type="button">
            Google
          </button>
          <button className="googleButton" type="button">
            LinkedIn
          </button>
          <button className="googleButton" type="button">
            SSO
          </button>
        </div>
        <h2 className="alreadyAccount">Already have account?</h2>
        <div>
          <Link to="/">Login</Link>
        </div>
        <div>
          <Link to="/welcome">Welcome</Link>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
