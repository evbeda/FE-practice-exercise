import React from "react";
import './HeartButton.css'
import { fillHeartIdSvg, emptyHeartIdSvg, fillHeartIdPath, emptyHeartIdPath, fillHeartDAtribute, emptyHeartDAtribute } from "./constants";


export const HeartButton = ({ clickHeartButton, id, following }) => {
  
  return (
    <div data-testid="home-image" className="eds-event-card-content__actions-container eds-event-card-content__actions-container--consumer eds-event-card-content__actions-container--always-visible">
      <span data-testid="event-image" className="eds-event-card__actions-id__412875932027 eds-event-card-content__actions-container__action eds-l-pad-all-1 eds-event-card-content__actions-icon--primary">
        <span data-testid="button-image" className="eds-icon-button eds-icon-button--neutral" data-spec="icon-button" >
          <button
            data-testid ='heart-button'
            onClick={()=>clickHeartButton(id)}
            aria-pressed="false"
            className="eds-btn--button eds-btn--none eds-btn--icon-only"
            type="button">
            <i className="eds-vector-image eds-icon--small eds-vector-image--block" title="" data-spec="icon" data-testid="icon">
              <svg
                
                // id="heart-chunky_svg__eds-icon--user-chunky_svg"
                id = {following ? fillHeartIdSvg : emptyHeartIdSvg }
                data-testid={following ? fillHeartIdSvg : emptyHeartIdSvg }
                x="0" y="0" 
                viewBox="0 0 24 24"
                // xml:space="preserve"
              >
                <path
                  // id= "heart-chunky_svg__eds-icon--heart-chunky_base"
                  id= {following ? fillHeartIdPath : emptyHeartIdPath }
                  data-testid= {following ? fillHeartIdPath : emptyHeartIdPath }
                  fillRule="evenodd"
                  clipRule="evenodd"
                  // d="M18.8 6.2C18.1 5.4 17 5 16 5c-1 0-2 .4-2.8 1.2L12 7.4l-1.2-1.2C10 5.4 9 5 8 5c-1 0-2 .4-2.8 1.2-1.5 1.6-1.5 4.2 0 5.8l6.8 7 6.8-7c1.6-1.6 1.6-4.2 0-5.8zm-1.4 4.4L12 16.1l-5.4-5.5c-.8-.8-.8-2.2 0-3C7 7.2 7.5 7 8 7c.5 0 1 .2 1.4.6l2.6 2.7 2.7-2.7c.3-.4.8-.6 1.3-.6s1 .2 1.4.6c.8.8.8 2.2 0 3z"
                  d={following ? fillHeartDAtribute : emptyHeartDAtribute }
                >
                </path>
              </svg>

              <span className="eds-is-hidden-accessible">
                Guardá VINO AL ROBLE en tu colección.
              </span>
            </i>
          </button>
        </span>
      </span>
    </div>
  );
};

