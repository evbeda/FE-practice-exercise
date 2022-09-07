
export const reducerSample = (state = [], action) => {
    switch (action.type) {
        case "@getEvents":
            return state.concat(action.payload)
        case "@updateQuantity":
            let eventToUpdate = state.find(event => event.id == action.payload[0])
            let payload = action.payload
            let ticketsInfo = payload.splice(1)
            let eventTickets = eventToUpdate.tickets.map(ticket => {
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
            console.log(newState)
            return newState
            
        default:
          return state;
      }
};
