import { PayloadAction, createReducer } from "@reduxjs/toolkit";

import { ITask } from "@interfaces/ITask";

import {
    tasksAddTaskAction,
    tasksAddTaskLabelAction,
    tasksDeleteListTasksAction,
    tasksDeleteTaskAction,
    tasksDeleteTaskLabelAction,
    tasksUpdateTaskTitleAction,
} from "../actions/tasks";

interface ITasksState {
    tasks: ITask[];
}

const initialState: ITasksState = {
    tasks: [],
};

const tasksReducer = createReducer(initialState, (builder) => {
    builder.addCase(tasksAddTaskAction, (state, action: PayloadAction<ITask>) => {
        state.tasks.push(action.payload);
    });

    builder.addCase(tasksDeleteTaskAction, (state, action: PayloadAction<number>) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    });

    builder.addCase(tasksDeleteListTasksAction, (state, action: PayloadAction<number[]>) => {
        state.tasks = state.tasks.filter((task) => !action.payload.includes(task.id));
    });

    builder.addCase(
        tasksUpdateTaskTitleAction,
        (
            state,
            action: PayloadAction<{
                idTask: number;
                newTitle: string;
            }>,
        ) => {
            const { idTask, newTitle } = action.payload;
            const task = state.tasks.find((task) => task.id === idTask);

            if (task) {
                task.title = newTitle;
            }
        },
    );

    builder.addCase(
        tasksAddTaskLabelAction,
        (state, action: PayloadAction<{ taskId: number; labelId: number }>) => {
            const { taskId, labelId } = action.payload;
            const task = state.tasks.find((task) => taskId === task.id);

            if (task) {
                task.labels.push(labelId);
            }
        },
    );

    builder.addCase(
        tasksDeleteTaskLabelAction,
        (
            state,
            action: PayloadAction<{
                taskId: number;
                labelId: number;
            }>,
        ) => {
            const { taskId, labelId } = action.payload;
            const task = state.tasks.find((task) => task.id === taskId);

            if (task) {
                task.labels = task.labels.filter((_labelId) => _labelId !== labelId);
            }
        },
    );
});

export default tasksReducer;
