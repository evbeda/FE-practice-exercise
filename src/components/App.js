import React from "react";
import "../styles.css";
import ContainerConected from './Container/ContainerConected.jsx';
import ModalConected from "./Modal/ModalConnected";


const App = () => {
  return (
    <div className="App">
      <ContainerConected/>
      <ModalConected />
    </div>
  );
};


export default App;
