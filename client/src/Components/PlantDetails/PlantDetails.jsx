import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getOnePlant, deletePlant} from "../../Services/api";
import NavBar2 from "../NavBar/NavBar2";
import ImageUpload from "../ImageUpload/ImageUpload";
import "./PlantDetails.css"

export default function PlantDetails() {
  const [plant, setPlant] = useState({});
  const { id } = useParams();
  const history = useHistory()

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [id]);
  const fetchData = async () => {
    const res = await getOnePlant(id);
    setPlant(res);
  };
  const handleDelete = async () => {
    await deletePlant(id)
    history.push("/plants")
  }

  return (
    <>
      <NavBar2 />
      <div className="plant-details">
        <h1>
          <strong>{plant.fields?.name}</strong>
        </h1>
        <p>
          <strong className="labels">Date Planted</strong><br/> {plant.fields?.datePlanted}{" "}
        </p>
        <p>
          <strong>Location</strong><br/> {plant.fields?.location}
        </p>
        <p>
          <strong>Purchased from</strong><br/>  {plant.fields?.purchased}
        </p>
        <p>
          <strong>Sunlight Exposure</strong><br/> 
          {plant.fields?.sunExposure}
        </p>
        <p>
          <strong>Bloom Color</strong><br/> 
          {plant.fields?.bloomColor}
        </p>
        <p>
          <strong>Bloom Season</strong><br/> 
          {plant.fields?.bloomSeason}
        </p>
        <p>
          <strong>General Notes</strong><br/> 
          {plant.fields?.notes}
        </p>
        {plant.fields?.image ? (
          <img className="image" src={plant.fields?.image} alt={plant.fields?.name} />
          ) : (
            <ImageUpload plant={plant} fetchData={fetchData} />
            )}<br/>
            <button className="deletebtn" onClick={handleDelete}>Uproot Plant</button>
      </div>
    </>
  );
}
