// import header and footer?
//make button and link to PlantList
//render introduction, style
//import css

import React from "react";
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <h2>GrowMe</h2>
      <p>
        GrowMe is a space for the avid or amatuer gardener to take notes on the
        various plants they have. Enabling them to keep track of what they've
        learned as the seasons go by. Lets get to planting!
      </p>
      <Link to="/plants">
        <button className="garden-btn">Visit My Garden</button>
      </Link>
    </div>
  );
}
