import React from "react";
import "./Card.css"

export const Card = (props) => {
    const {eventName, imageUrl, startDatetime, endDateTime, venue, followers} = props
    return (
        <div className="individual-card">
            <div className="image">
                <img alt= " " src={imageUrl} height="200px" width="200px" onClick={openModal}></img>
            </div>
            <div className="description">
                <div className="event-name">{eventName}</div>
                <div className="time">{startDatetime}</div>
                <div className="venue">{venue}</div>
                <div className="followers">{followers} followers</div>
            </div>
        </div>
    )
}

const openModal = () => {
    console.log("aaaaaaaaaaahhhhhh")
}