import React, { useEffect, useState } from "react";
import { OrderSummary } from "../OrderSummary/OrderSummary";
import { FormTickets} from "../Forms/FormTickets";
import "./Modal.css"
import { formatedDatetime } from "../../utils/utils"


export function Modal(props){
    const { changeQuantityTicket, eventsToSell, showModal, handleCloseModal } = props
  
    const [ticketsInfo, setTicketsInfo] = useState(
      eventsToSell.tickets.map(ticket => {
            return(
                {
                    id: ticket.id,
                    name: ticket.name,
                    price: ticket.price,
                    purchased_amount: 0,
                    fee_type: ticket.fee_type,
                    fee: ticket.fee ? ticket.fee : ""
                }
            )
        })
    )
   
    return(
        <dialog open={showModal} id="modal" data-testid="modal-dialog">
          <div className="container-modal">
          <div className="col-modal" id="form-section">
                  <h1 id="event-name-modal" data-testid="event-name-modal">{eventsToSell.eventName.toUpperCase()}</h1>
                  <p id="event-date-modal" data-testid="event-date-modal">{formatedDatetime(eventsToSell.startDatetime)}</p>
                  <FormTickets
                  eventId={eventsToSell.id}
                  tickets={eventsToSell.tickets}
                  ticketsInfo={ticketsInfo}
                  setTicketsInfo={setTicketsInfo}
                  changeQuantityTicket={changeQuantityTicket}
                  handleCloseModal={handleCloseModal}
                  />
                  <p className="powered" data-testid="powered-p">Powered by <span id="eventbrite" data-testid="powered-eventbrite">eventbrite</span></p>
              </div>
              <div className="col-modal" id="order-section" data-testid="order-section">
                  <OrderSummary 
                  eventsToSell={eventsToSell}
                  ticketsInfo={ticketsInfo}
                  />
              </div>
              <div onClick={handleCloseModal} className="col" id="close-icon">
                <i className="fa-regular fa-circle-xmark" id="close-modal" data-testid="icon-close-modal"></i>
              </div>
            
          </div>
        </dialog>
    )
}