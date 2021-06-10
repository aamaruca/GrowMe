import React from "react";
import { Link } from "react-router-dom"
import "./Home.css"

export default function Home() {
  return (
    <div className="home">
      <h1>GrowMe</h1>
      <p className= "intro">
        GrowMe is a space for the avid or amatuer gardener to take notes on the
        various plants they have. Enabling them to keep track of what they've
        learned as the seasons go by. Lets get to planting!
      </p> 
      <Link to="/plants">
        <button className="garden-btn">My Garden</button>
      </Link>
    </div>
  );
}
//source: 