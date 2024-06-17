import { combineReducers } from "redux";

import counterReducer from "./counterReducer";
import listReducer from "./listReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    lister: listReducer,
});

export default rootReducer;
