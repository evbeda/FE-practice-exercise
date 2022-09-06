
import axios from 'axios'


export function getEventData() {

 return axios.get("http://localhost:3001/events")


}


export default getEventData;
