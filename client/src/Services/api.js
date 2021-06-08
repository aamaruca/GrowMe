//import axios
//create variables to store apikey, baseurl and config
//create and store all axios requests here
import axios from "axios"

const apiKey = process.env.REACT_APP_AIRTABLE_KEY
const baseUrl = "https://api.airtable.com/v0/appy8EATGezR6VvHz/Display%20and%20Create"


const config = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
}

export const getPlantList = async () => {
  try {
    const res = await axios.get(baseUrl, config)
    return res.data.records
  } catch (error) {
    console.error(error)
  }
}

