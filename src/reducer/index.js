export const CLICK_FOLLOW = 'CLICK_FOLLOW'



export const reducerSample = (state = [], action) => {
    switch (action.type) {
        case "@getEvents":
            return state.concat(action.payload);
        case "@updateQuantity":
            return action.payload;
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
