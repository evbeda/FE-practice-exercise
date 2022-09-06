export const actionAddTodo = { type: "@addMe" };
export const actionDeleteTodo = { type: "@removeAll" };

export const addToDo = (toDos) => (dispatch) => {
    actionAddTodo.payload = toDos;
    return dispatch(actionAddTodo);
}

export const deleteAllToDo = () => (dispatch, getState) =>{
    return dispatch(actionDeleteTodo)
}