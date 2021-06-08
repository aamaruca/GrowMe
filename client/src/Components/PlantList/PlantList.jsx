//import request get from api.js
//import hooks from react
//import link from rrd
//import css
//import navbar
//render data from get request
//create link to form for addplant and plant details
import {useState, useEffect} from 'react'
import NavBar from '../NavBar/NavBar'
import { getPlantList } from '../../Services/api'
import "../NavBar/NavBar.css"
import "./PlantList.css"

export default function PlantList() {
  const [plantList, setPlantList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPlantList()
      console.log(res)
      setPlantList(res)
    }
  fetchData()
}, [])

  return (
    <div>
      <NavBar/>
      <h2>My Garden</h2>
    </div>
  )
}
