
import React from "react";
import { EventImage } from "../eventImage/EventImage";
// import { HeartButtonConnected } from "../heartButton/HeartButtonConnected";
import { HeartButtonConnected } from "../heartButton/HeartButtonConnected";
import { Subcontent } from "../subcontent/Subcontent";
import moment from "moment";
import 'moment/locale/es';

import './Card.css'

moment.locale('es');

//exportar funcion utils
const formatedDatetime = (datetime) => {
  let eventDateToShare = ""
  let eventDate = moment()
  let today = moment(datetime)
  const diffDates = eventDate.diff(today,"days")
  switch(diffDates){
    case 0:
      eventDateToShare = "Today!!!"
      break;
    case 1:
      eventDateToShare = "Tomorrow!!!"
      break;
    default:
      eventDateToShare = eventDate.format("llll")
  }
  return eventDateToShare
}

export const Card = ({event, handleShowModal, setEventsToSell}) => {
  const {
    id,
    eventName,
    startDatetime,
    venue,
    followers,
    organizer,
    tickets,
    imageUrl,
    followByMe,
  } = event;

  const AreThereTickets = () =>{
    let flag = false;
    tickets.forEach(ticket => {
        if(ticket.quantity != 0){
          flag = true;
        }
    });
    return flag
  }

  const goToCheckOutEvent = () =>{
    setEventsToSell(event);
    handleShowModal();
  }
  
  return (
    <article>

      <EventImage 
        className={`${AreThereTickets() ? "cursorPointer" : ""}`}
        imageUrl={imageUrl} 
        showModal={AreThereTickets() ? goToCheckOutEvent : null} 
        AreThereTickets={AreThereTickets}
      />
      
      <div className="eds-event-card-content__content-container eds-event-card-content__content-container--consumer">
        <div className="eds-event-card-content__content">
          
          <HeartButtonConnected id={id} following={followByMe} />

          <div className="eds-event-card-content__content__principal">
            <div className="eds-event-card-content__primary-content">

              {/* NOMBRE EVENTO */}
              <a 
                onClick={AreThereTickets() ? goToCheckOutEvent : null} 
                className={`eds-event-card-content__action-link ${AreThereTickets() ? "cursorPointer" : ""}`} 
                aria-label="" 
                target="_blank" 
                rel="noopener"
              >
                <h3 className="eds-event-card-content__title eds-text-color--ui-800 eds-text-bl eds-text-weight--heavy">
                  <div data-spec="event-card__formatted-name">
                    <div className="eds-is-hidden-accessible">
                      {eventName}
                    </div>
                    <div className="eds-event-card__formatted-name--is-clamped eds-event-card__formatted-name--is-clamped-three eds-text-weight--heavy" aria-hidden="true" role="presentation" data-spec="event-card__formatted-name--content">
                      {eventName}
                    </div>
                  </div>
                </h3>
              </a>

              {/* FECHA EVENTO */}
              <div className="eds-event-card-content__sub-title eds-text-color--primary-brand eds-l-pad-bot-1 eds-l-pad-top-2 eds-text-weight--heavy eds-text-bm">
                {formatedDatetime(startDatetime)}
              </div>

            </div>
            <Subcontent
              tickets={tickets}
              venue={venue}
              organizer={organizer}
              followers={followers} 
            />

          </div>

        </div>
      </div>
      

    </article>
  );

}