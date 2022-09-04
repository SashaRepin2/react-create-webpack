import { combineReducers } from "@reduxjs/toolkit";

import boardReducer from "./BoardSlice";
import labelFormReducer from "./LabelFormSlice";
import labelReducer from "./LabelSlice";
import listReducer from "./ListSlice";
import taskReducer from "./TaskSlice";

export const rootReducer = combineReducers({
    boardReducer,
    listReducer,
    taskReducer,
    labelReducer,
    labelFormReducer,
});
