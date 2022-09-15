import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@store/store";

const selectTaskId = (state: RootState, taskId: number) => taskId;

export const selectTasks = (state: RootState) => state.tasksReducer.tasks;

export const selectTaskById = createSelector([selectTasks, selectTaskId], (tasks, taskId) => {
    return tasks.find((task) => task.id === taskId);
});

const tasksSelector = {
    selectTasks,
    selectTaskById,
};

export default tasksSelector;
