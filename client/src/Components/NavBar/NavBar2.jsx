import React from "react";
import { Link } from "react-router-dom";

export default function NavBar2() {
  return (
    <div>
      <Link to="/">
        <button className="homebtn">Home</button>
      </Link>
      <Link to="/plants">
        <button className="backbtn">Back</button>
      </Link>
    </div>
  );
}
