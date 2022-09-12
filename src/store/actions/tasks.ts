import { createAction } from "@reduxjs/toolkit";

import { ITask } from "@src/interfaces/ITask";

const TASKS_ADD_TASK = "TASKS/ADD_TASK";
const TASKS_UPDATE_TASK_TITLE = "TASKS/UPDATE_TASK_TITLE";
const TASKS_DELETE_TASK = "TASKS/DELETE_TASK";

const TASKS_DELETE_LIST_TASKS = "TASKS/DELETE_LIST_TASKS";

const TASKS_ADD_TASK_LABEL = "TASKS/ADD_TASK_LABEL";
const TASKS_DELETE_TASK_LABEL = "TASKS/DELETE_TASK_LABEL";

/**
 * Add new task to storage
 */
export const tasksAddTaskAction = createAction<ITask>(TASKS_ADD_TASK);

/**
 * Update task title
 */
export const tasksUpdateTaskTitleAction = createAction<{
    idTask: number;
    newTitle: string;
}>(TASKS_UPDATE_TASK_TITLE);

/**
 * Delete task from storage
 */
export const tasksDeleteTaskAction = createAction<number>(TASKS_DELETE_TASK);

/**
 * Delete list tasks from storage
 */
export const tasksDeleteListTasksAction = createAction<number[]>(TASKS_DELETE_LIST_TASKS);

/**
 * Add new label to task
 */
export const tasksAddTaskLabelAction = createAction<{
    taskId: number;
    labelId: number;
}>(TASKS_ADD_TASK_LABEL);

/**
 * Delete label from task
 */
export const tasksDeleteTaskLabelAction = createAction<{
    taskId: number;
    labelId: number;
}>(TASKS_DELETE_TASK_LABEL);
