import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { getPlantList } from '../../Services/api'
import NavBar from '../NavBar/NavBar'
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
      <div className="container">
      <h1>My Garden</h1>
      <Link to="/new"><button className="new-btn">New Plant</button></Link>
        {plantList.map((plant, index) => (
          <div className="plant-list" key={index}><Link to={`/details/${plant.id}`}>{plant.fields.name} 
          </Link></div>
        ))}
      </div>
    </>
  )
}
