//import hooks and axios post request from api,js
//import navbar and links via buttons
//import css
//create form for post request
//create handlesubmit and handlechange events
//pmvp create toggle to reroute back to plantlist on submit instead of navbar
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import NavBar2 from '../NavBar/NavBar2'
import './AddPlant.css'
import {postNewPlant} from '../../Services/api'

export default function AddPlant() {
  const [formData, setFormData] = useState({})
  const history = useHistory()

  const handleChange = (e) => {
    const { name, value } = e.target
    
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await postNewPlant(formData);
    console.log(res);
    history.push("/plants")
  };

  return (
    <div>
      <NavBar2 />
      <h2>Plant Notes</h2>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Plant Name: </label>
        <input type="text" name="name"></input><br/>
        <br/><label>Date Planted: </label>
        <input type="date" name="datePlanted"></input><br />
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
      <button>Plant Me!</button>
      </form>
  
    </div>
  )
}
