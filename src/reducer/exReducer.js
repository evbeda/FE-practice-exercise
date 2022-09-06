export const reducerEvent = (state = [], action) => {
    switch (action.type) {
      case "@createMoskApi":
        return action.payload

     
    default:
        return state;
    }
    };
