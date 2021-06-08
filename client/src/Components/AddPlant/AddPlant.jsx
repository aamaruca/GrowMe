//import hooks and axios post request from api,js
//import navbar and links via buttons
//import css
//create form for post request
//create handlesubmit and handlechange events
//pmvp create toggle to reroute back to plantlist on submit instead of navbar
import axios from 'axios'
import {useState, useEffect} from 'react'
import NavBar2 from '../NavBar/NavBar2'
import './AddPlant.css'

export default function AddPlant() {


  return (
    <div>
      <NavBar2 />
      <h2>Plant Notes</h2>
      <form>
        <label>Plant Name: </label>
        <input type="text" name="name"></input><br/>
        <br/><label>Date Planted: </label>
        <input type="text" name="datePlanted"></input><br />
        <br/><label>Location: </label>
        <input type="text" name="location"></input><br />
        <br/><label>Purchased from: </label>
        <input type="text" name="purchased"></input><br />
        <br/><label>Sun Exposure: </label>
        <input type="text" name="sunExposure"></input><br />
        <br/><label>Bloom Color: </label>
        <input type="text" name="bloomColor"></input><br />
        <br/><label>Bloom Season: </label>
        <input type="text" name="bloomSeason"></input><br />
        <br/><label>General Notes: </label>
        <br/><textarea  name="notes"
          rows={10} /><br />
        <br/><label>Upload Image: </label>
        <input type="file" name="image"></input><br />
      </form>
  
    </div>
  )
}
