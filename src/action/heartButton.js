import { CLICK_FOLLOW } from "../reducer";

export const clickHeartButton = (id) => (dispatch) => {

    return dispatch({
        type: CLICK_FOLLOW,
        id: id,
    });
};