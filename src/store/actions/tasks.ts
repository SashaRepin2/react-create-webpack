import { createAction } from "@reduxjs/toolkit";

import { ITask } from "@src/interfaces/ITask";

const TASKS_ADD_TASK = "TASKS/ADD_TASK";
const TASKS_DELETE_TASK = "TASKS/DELETE_TASK";

const TASKS_DELETE_LIST_TASKS = "TASKS/DELETE_LIST_TASKS";

const TASKS_ADD_TASK_LABEL = "TASKS/ADD_TASK_LABEL";
const TASKS_DELETE_TASK_LABEL = "TASKS/DELETE_TASK_LABEL";

/**
 * Add new task to storage
 */
export const tasksAddTaskAction = createAction<ITask>(TASKS_ADD_TASK);

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
    task: ITask;
    newTaskLabels: number[];
}>(TASKS_ADD_TASK_LABEL);

/**
 * Delete label from task
 */
export const tasksDeleteTaskLabelAction = createAction<{
    task: ITask;
    newTaskLabels: number[];
}>(TASKS_DELETE_TASK_LABEL);
