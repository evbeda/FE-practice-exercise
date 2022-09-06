import React, { useEffect, useState } from "react";
import getEventData from "../api/eventService";
import "../styles.css";
import { CardContainerConnected } from "./CardContainerConnected";
// import { CardContainer } from "./CardContainer";
import { Modal } from "./Modal";
import { OrderSummaryContainerConnected } from "./orderSummaryContainer/OrderSummaryContainerConnected";


const App = (props) => {

  const { mockedApi, mockApi } = props;
  const [ showModal, setShowModal ] = useState(false);

  useEffect(()=>{
    getEventData()
    .then(response => {
      const data = response.data
      mockApi(data)
    })
    .catch(e =>{
      console.log("error", e)
    })
    
  },[])

  return (
    <div className="App">
      <h1>Hi y'all!</h1>
      <p>
      Create a new event visualization app, using the proposed project. 
      This app will have a checkout component and will reduce the tickets quantity after purchase it.
      Download the project and install all the dependencies necessaries to execute it.

      </p>
      <p>
    * To install and run the project and dependencies, download npm and run:
    <ul>
    <li>- npm install</li>
    <li>- npm start</li>
    </ul>
    
      </p>
      <button id="myBtn" onClick={()=>setShowModal(true)}>Open Modal</button>
      <Modal displayModal={showModal} setShowModal={setShowModal}/>
      <CardContainerConnected/>
    </div>
  );
};

export default App;
