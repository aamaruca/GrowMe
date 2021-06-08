//create display and home buttons to be present on every page to link back to homepage or display page
//import css

import React from "react";
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div>
      <Link to="/">
        <button className="home-btn">Home</button>
      </Link>
    </div>
  );
}
