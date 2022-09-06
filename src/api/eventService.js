import axios from 'axios'

export function getEventData() {
 // Get data from data.json and return it like a promise
 return axios.get("http://localhost:3001/events")

 
}


export default getEventData;
