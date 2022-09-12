import { combineReducers } from "@reduxjs/toolkit";

import boardsReducer from "./boards";
import labelFormReducer from "./labelForm";
import labelsReducer from "./labels";
import listsReducer from "./lists";
import tasks from "./tasks";

const rootReducer = combineReducers({
    boardsReducer,
    listsReducer,
    labelsReducer,
    tasksReducer: tasks,
    labelFormReducer,
});

export default rootReducer;
