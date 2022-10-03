import { combineReducers } from "@reduxjs/toolkit";

import boardsReducer from "./boards";
import labelsReducer from "./labels";
import listsReducer from "./lists";
import tasksReducer from "./tasks";

const rootReducer = combineReducers({
    boardsReducer,
    listsReducer,
    labelsReducer,
    tasksReducer,
});

export default rootReducer;
