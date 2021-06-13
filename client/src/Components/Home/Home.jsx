import React from "react";
import { Link } from "react-router-dom"
import "./Home.css"

export default function Home() {
  return (
    <div className="home">
      <h1>GrowMe</h1>
      <p className= "intro">
        Welcome to GrowMe! A note taking app for the avid or amatuer gardener. With GrowMe you can follow your plants journey and learn how to better your garden. Lets get to planting!
      </p> 
      <Link to="/plants">
        <button className="garden-btn">My Garden</button>
      </Link>
    </div>
  );
}