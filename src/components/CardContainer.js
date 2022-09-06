import React from "react";
import { Card } from "./Card";
import "./CardContainer.css"

export const CardContainer = (props) => {
    //traerme mockedapi.events
    const { eventList } = props

    return (
        <div className="card-container">

            {eventList.map(elem => <Card {...elem} key={elem.id}/>)}
        </div>
    )
}
