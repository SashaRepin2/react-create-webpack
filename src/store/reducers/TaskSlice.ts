import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../interfaces/ITask";

interface ITaskState {
    tasks: ITask[];
}

const initialState: ITaskState = {
    tasks: [],
};

export const TaskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<ITask>) {
            state.tasks.push(action.payload);
        },
        deleteListTasks(state, action: PayloadAction<number[]>) {
            state.tasks = state.tasks.filter((task) => !action.payload.includes(task.id));
        },
        deleteTask(state, action: PayloadAction<number>) {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        updateTaskTitle(state, action: PayloadAction<{ idTask: number; newTitle: string }>) {
            const { idTask, newTitle } = action.payload;
            const task = state.tasks.find((task) => task.id === idTask);

            if (task) {
                task.title = newTitle;
            }
        },
        addLabelToTask(state, action: PayloadAction<{ taskId: number; labelId: number }>) {
            const { taskId, labelId } = action.payload;
            const task = state.tasks.find((task) => taskId === task.id);

            if (task) {
                task.labels.push(labelId);
            }
        },
        deleteLabelFromTask(state, action: PayloadAction<{ taskId: number; labelId: number }>) {
            const { taskId, labelId } = action.payload;
            const task = state.tasks.find((task) => task.id === taskId);

            if (task) {
                task.labels = task.labels.filter((_labelId) => _labelId !== labelId);
            }
        },
    },
});

export default TaskSlice.reducer;
