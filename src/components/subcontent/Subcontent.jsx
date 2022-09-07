import React from "react";
import { FollowersIcon } from "../followerIcon/FollowersIcon";
import './Subcontent.css'
import { SoldButton } from "./soldOut";

const priceInfo = (tickets) => {
  return `A partir de $ ${minimumPrice(tickets)}`
}

const minimumPrice = (tickets) => {
  let chepeastTicket = tickets.reduce(
    (previus, current) => {
      return (current.price > previus.price
        && current.quantity > 0) ? current : previus
    })
  return chepeastTicket.price
}

export const Subcontent = ({tickets, venue, organizer, followers, thereAreTickets}) => {
  return (

    <div className="eds-event-card-content__sub-content">
      <div className="eds-event-card-content__sub eds-text-bm eds-text-color--ui-600 eds-l-mar-top-1">
        <div data-subcontent-key="location" className="card-text--truncated__one">
          {venue}
        </div>
      </div>

      {/*  PRECIO  */}
      <div className="eds-event-card-content__sub eds-text-bm eds-text-color--ui-600 eds-l-mar-top-1">
        {thereAreTickets? priceInfo(tickets):<SoldButton/>}
      </div>

      <div className="eds-event-card-content__sub eds-text-bm eds-text-color--ui-600 eds-l-mar-top-1">
        <div data-subcontent-key="follow" className="eds-event-card__sub-content--signal eds-text-color--ui-800 eds-text-weight--heavy">

          {/*  ORGANIZER  */}
          <div data-subcontent-key="organizerName" className="eds-event-card__sub-content--organizer eds-text-color--ui-800 eds-text-weight--heavy card-text--truncated__two">
            {organizer}
          </div>

          {/*  ICON PERSON  */}
          <FollowersIcon />

          {/* followers*/}
          <span className="eds-l-pad-hor-1">
          </span>{followers} seguidores
        </div>
      </div>
    </div>

  );  
};