import { combineReducers } from "@reduxjs/toolkit";

import boardsReducer from "./boardsReducer";
import labelFormReducer from "./labelFormReducer";
import labelsReducer from "./labelsReducer";
import listsReducer from "./listsReducer";
import tasksReducer from "./tasksReducer";

const rootReducer = combineReducers({
    boardsReducer,
    listsReducer,
    tasksReducer,
    labelsReducer,
    labelFormReducer,
});

export default rootReducer;
