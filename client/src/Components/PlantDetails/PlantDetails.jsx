//import hooks usestate, useefect, useparams, link from react and rrd
//import axios get request for ONE object of data possibly use id to identify it
//import navbar and link to it via buttons
//render data for specific object
//pmvp create and add new/edit component/request and/or button and link 
//import css

import {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import { getOnePlant } from "../../Services/api"
import NavBar2 from '../NavBar/NavBar2'

export default function PlantDetails() {
  const [plant, setPlant] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const res = await getOnePlant(id);
      setPlant(res);
      console.log(res);
    }
    fetchData()
},[id])

  return (
    <div>
      <NavBar2 />
      <h2><strong>{plant.fields?.name}</strong></h2>
      <p><strong>Date Planted:</strong> {plant.fields?.datePlanted} </p>
      <p><strong>Location:</strong> {plant.fields?.location}</p>
      <p><strong>Purchased from:</strong> {plant.fields?.purchased}</p>
      <p><strong>Sunlight Exposure: </strong>{plant.fields?.sunExposure}</p>
      <p><strong>Bloom Color: </strong>{plant.fields?.bloomColor}</p>
      <p><strong>Bloom Season: </strong>{plant.fields?.bloomSeason}</p>
      <p><strong>General Notes: </strong>{plant.fields?.notes}</p>
    </div>
  )
}
