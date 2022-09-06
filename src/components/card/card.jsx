
import React from "react";
import { EventImage } from "../eventImage/EventImage";
import { HeartButton } from "../heartButton/HeartButton";
import { Subcontent } from "../subcontent/Subcontent";
import moment from "moment";
import 'moment/locale/es';

import './card.css'

moment.locale('es');


const formatedDatetime = (datetime) => {
  return (
    moment(datetime).format('llll')
    // moment(datetime).format('MMM D, YYYY, H:mm:')
    );
}

export const Card = ({event}) => {
  const {
    eventName,
    startDatetime,
    venue,
    followers,
    organizer,
    tickets,
    imageUrl,
  } = event;
  
  return (
    <article>

      <EventImage imageUrl={imageUrl} />
      
      <div className="eds-event-card-content__content-container eds-event-card-content__content-container--consumer">
        <div className="eds-event-card-content__content">
          
          <HeartButton />

          <div className="eds-event-card-content__content__principal">
            <div className="eds-event-card-content__primary-content">

              {/* NOMBRE EVENTO */}
              <a tabIndex="0" href="https://www.eventbrite.com.ar/e/vino-al-roble-tickets-412875932027?aff=ebdssbcitybrowse" className="eds-event-card-content__action-link" aria-label="" target="_blank" rel="noopener">
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


