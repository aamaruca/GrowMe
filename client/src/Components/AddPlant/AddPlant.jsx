import { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar2 from "../NavBar/NavBar2";
import "./AddPlant.css";
import { postNewPlant } from "../../Services/api";

export default function AddPlant() {
  const [formData, setFormData] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await postNewPlant(formData);
    console.log(res);
    history.push("/plants");
  };

  return (
    <>
      <NavBar2 />
      <div className="data">
        <h1>Plant Notes</h1>
        <form className="form" onChange={handleChange} onSubmit={handleSubmit}>
          <input className="input" type="text" name="name" placeholder="Plant Name"></input>
          <br />
          <input className="input" type="date" name="datePlanted" placeholder="Date Planted"></input>
          <br />
          <input className="input" type="text" name="location" placeholder="Location Planted"></input>
          <br />
          <input className="input" type="text" name="purchased" placeholder="Purchased from"></input>
          <br />
          <input className="input" type="text" name="sunExposure" placeholder="Sun Exposure"></input>
          <br />
          <input className="input" type="text" name="bloomColor" placeholder="Bloom Color"></input>
          <br />
          <input className="input" type="text" name="bloomSeason" placeholder="Month of Bloom"></input>
          <br />
          <label className= "notes">General Notes: </label>
          <textarea className="textarea" name="notes" rows={10} placeholder="Enter notes here..." />
          <br />
          <button className="addbtn">Plant Me!</button>
        </form>
      </div>
    </>
  );
}
