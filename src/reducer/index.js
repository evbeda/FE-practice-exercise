
export const reducerSample = (state = [], action) => {
    switch (action.type) {
        case "@getEvents":
            return state = action.payload
        default:
          return state;
      }
};