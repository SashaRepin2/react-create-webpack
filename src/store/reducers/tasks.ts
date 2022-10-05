import { createReducer } from "@reduxjs/toolkit";

import { ITask } from "@interfaces/ITask";

import {
    tasksAddTaskAction,
    tasksAddTaskLabelAction,
    tasksDeleteListTasksAction,
    tasksDeleteTaskAction,
    tasksDeleteTaskLabelAction,
} from "../actions/tasks";

interface ITasksState {
    tasks: ITask[];
}

const initialState: ITasksState = {
    tasks: [],
};

const tasksReducer = createReducer(initialState, (builder) => {
    builder.addCase(tasksAddTaskAction, (state, action) => {
        return {
            ...state,
            tasks: [...state.tasks, action.payload],
        };
    });

    builder.addCase(tasksDeleteTaskAction, (state, action) => {
        return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
    });

    builder.addCase(tasksDeleteListTasksAction, (state, action) => {
        return {
            ...state,
            tasks: state.tasks.filter((task) => !action.payload.includes(task.id)),
        };
    });

    builder.addCase(tasksAddTaskLabelAction, (state, action) => {
        const { task, newTaskLabels } = action.payload;

        return {
            ...state,
            tasks: state.tasks.map((_task) =>
                _task.id === task.id
                    ? {
                          ..._task,
                          labels: newTaskLabels,
                      }
                    : _task,
            ),
        };
    });

    builder.addCase(tasksDeleteTaskLabelAction, (state, action) => {
        const { task, newTaskLabels } = action.payload;

        return {
            ...state,
            tasks: state.tasks.map((_task) =>
                _task.id === task.id
                    ? {
                          ..._task,
                          labels: newTaskLabels,
                      }
                    : _task,
            ),
        };
    });
});

export default tasksReducer;
