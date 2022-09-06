export const addMockApi = { type: "@createMoskApi"};

export const mockApi = (data) => (dispatch) => {
    addMockApi.payload = data;
    return dispatch(addMockApi);
  };