import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { getPlantList } from '../../Services/api'
import NavBar from '../NavBar/NavBar'
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
    <>
      <NavBar/>
      <div className="plant-list">
      <h1>My Garden</h1>
        {plantList.map((plant, index) => (
          <div key={index}><Link to={`/details/${plant.id}`}>{plant.fields.name}</Link></div>
        ))}
        <Link to="/new"><button className="new-btn">New Plant</button></Link>
      </div>
    </>
  )
}
