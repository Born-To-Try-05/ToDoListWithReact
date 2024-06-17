import { INCREMENT, DECREMENT, ADD_TO_DO, MARK, UPDATE, DELETE } from "./type";

export const increaseCounter = () => {
    return {
        type: INCREMENT,
    };
};

export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};

export const addToDo = (payload) => {
    return {
        type: ADD_TO_DO,
        payload,
    };
};

export const mark = (index, checked) => {
    return {
        type: MARK,
        payload: { index, checked },
    };
};

export const updateToDo = (index, text) => {
    return {
        type: UPDATE,
        payload: { index, text },
    };
};

export const deleteToDo = (payload) => {
    return {
        type: DELETE,
        payload,
    };
};
