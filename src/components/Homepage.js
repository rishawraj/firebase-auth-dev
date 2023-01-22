import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <h1>Home Page</h1>
      <Link style={{ marginRight: "10px" }} to="/login">
        LogIn
      </Link>
      <Link to="/signup">Sign Up</Link>
    </>
  );
}
