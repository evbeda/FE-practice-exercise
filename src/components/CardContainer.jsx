import React from "react";
import { Card } from './Card.jsx';

export function CardContainer(props){
    props = {
        events : 
        [
            {eventName: "ev1", id: 214, description: "d1"}, 
            {eventName: "ev2", id: 215, description: "d2"}, 
            {eventName: "ev3", id: 216, description: "d3"}, 
            {eventName: "ev4", id: 217, description: "d4"}
        ]
    }
    const {events} = props

    return (
        <div>
            Componetn Card Container
            {events.map(elem => <Card {...elem} />)}
        </div>
        
    )
}
