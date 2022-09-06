export const reducerEvent = (state = {modal:{}, events:[]}, action) => {
    switch (action.type) {
      case "@createMoskApi":
        const newState = {...state, events:action.payload}
        return newState

    default:
        return state;
    }
    };
