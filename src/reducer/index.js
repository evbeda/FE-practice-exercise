export const CLICK_FOLLOW = 'CLICK_FOLLOW'



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

        case CLICK_FOLLOW:
            
            let newState1 = Object.assign([], state)

            const index = newState1.findIndex(event => event.id == action.id)
            newState1[index].followByMe = !newState1[index].followByMe
            let change = newState1[index].followByMe ? 1 : -1
            newState1[index].followers += change
                
            state = newState1
            return state;
        default:
          return state;
      }
};
