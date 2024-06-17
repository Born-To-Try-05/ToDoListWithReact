import { ADD_TO_DO, DELETE, MARK, UPDATE } from "../action/type";

const INITIAL_STATE = {
    list: [],
};

const listReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            return {
                ...state,
                list: [...state.list, action.payload],
            };

        case MARK:
            return {
                ...state,
                list: state.list.map((item, index) =>
                    index === action.payload.index ? { checked: action.payload.checked, text: item.text } : item
                ),
            };

        case UPDATE:
            return {
                ...state,
                list: state.list.map((item, index) =>
                    index === action.payload.index
                        ? {
                              checked: item.checked,
                              text: action.payload.text,
                          }
                        : item
                ),
            };

        case DELETE: {
            return {
                ...state,
                list: action.payload,
            };
        }

        default:
            return state;
    }
};

export default listReducer;
