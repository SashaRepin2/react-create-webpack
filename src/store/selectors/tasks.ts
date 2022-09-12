import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@store/store";

export const selectTasks = (state: RootState) => state.tasksReducer.tasks;
export const selectTaskId = (state: RootState, taskId: number) => taskId;

export const selectTaskById = createSelector([selectTasks, selectTaskId], (tasks, taskID) => {
    return tasks.find((task) => task.id === taskID);
});
