import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Login</Link>
      <Link to="/signup">Sign up</Link>
      <Link to="/signout">Sign out</Link>
    </nav>
  );
}

export default Navigation;
