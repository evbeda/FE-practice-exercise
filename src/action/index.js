export const AllEvents = { type: "@getEvents" };
export const actionDeleteTodo = { type: "@removeAll" };
export const updateQuantity = { type: "@updateQuantity"}

const getEvents = async() =>{
    const response = await fetch("http://localhost:3001/events", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      });

    return response.json(); // parses JSON response into native JavaScript objects

}

export const getAllEvents = () => async (dispatch) => {
    AllEvents.payload = await getEvents();
    return dispatch(AllEvents);
}

export const deleteAllToDo = () => (dispatch, getState) =>{
    return dispatch(actionDeleteTodo)
}

export const changeQuantityTicket = (eventId, ticketsInfo) => (dispatch, getState) => {
  let state = getState()
  let eventToUpdate = state.find(event => event.id == eventId)
  eventToUpdate.tickets.map(ticket => {
    ticketsInfo.map(updatedTicket => {
          if(ticket.id == updatedTicket.id){
              ticket.quantity -= updatedTicket.purchased_amount
          }
          return updatedTicket
      })
      return ticket
  })
  let newState = state.map(event => {
      if (event.id == eventToUpdate.id){
          event = eventToUpdate
      }
      return event
  })
  updateQuantity.payload = newState;
  return dispatch(updateQuantity)
}

