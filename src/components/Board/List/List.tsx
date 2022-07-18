import React from "react";
import { Box, InputBase, Stack, Typography } from "@mui/material";
import { Draggable, Droppable } from "react-beautiful-dnd";

import useAppDispatch from "../../../hooks/useAppDispatch";

import { IList } from "../../../interfaces/IList";
import { ITask, Statuses } from "../../../interfaces/ITask";
import { TaskSlice } from "../../../store/reducers/TaskSlice";
import Task from "./Task/Task";
import useAppSelector from "../../../hooks/useAppSelector";
import { ListSlice } from "../../../store/reducers/ListSlice";

interface ListProps {
    list: IList;
    index: number;
    onDeleteHandler?: (id: number) => void;
}

const List: React.FC<ListProps> = ({ list, index }) => {
    const dispatch = useAppDispatch();
    const { addTask, deleteTask, changeStatus } = TaskSlice.actions;
    const { addListTask } = ListSlice.actions;

    const tasks = useAppSelector((state) => {
        // state.taskReducer.tasks.filter((task) => task.listId === list.id)
        const listTasks = state.taskReducer.tasks.filter((task) =>
            list.sequenceTasks.includes(task.id)
        );

        console.log(
            listTasks.sort(
                (prevTask: ITask, nextTask: ITask) =>
                    list.sequenceTasks.indexOf(prevTask.id) -
                    list.sequenceTasks.indexOf(nextTask.id)
            )
        );

        return listTasks.sort(
            (prevTask: ITask, nextTask: ITask) =>
                list.sequenceTasks.indexOf(prevTask.id) - list.sequenceTasks.indexOf(nextTask.id)
        );
    });

    const [inputValue, setInputValue] = React.useState<string>("");

    function onKeyDownHandler(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.code === "Enter") {
            if (inputValue) {
                const task = {
                    id: Date.now(),
                    title: inputValue,
                    status: Statuses.UNCOMPLETE,
                };
                dispatch(addTask(task));
                dispatch(addListTask({ listId: list.id, taskId: task.id }));
                setInputValue("");
            }
        }
    }

    function CompleteTask(taskId: number) {
        dispatch(changeStatus({ taskId: taskId, newStatus: Statuses.COMPLETE }));
    }

    function DeleteTask(taskId: number) {
        dispatch(deleteTask(taskId));
    }

    return (
        <Draggable draggableId={list.id.toString()} index={index}>
            {(provided) => (
                <Box
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    sx={{
                        bgcolor: "#8458b3",
                        borderRadius: "10px",
                        minHeight: "500px",
                        maxWidth: "400px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            bgcolor: "#400085",
                            padding: "10px 5px",
                            borderRadius: "10px 10px 0 0",
                        }}
                    >
                        <Typography variant={"h6"} sx={{ color: "#fff", marginBottom: "10px" }}>
                            {list.title}
                        </Typography>
                        <InputBase
                            value={inputValue}
                            placeholder={"Название задания"}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={onKeyDownHandler}
                            sx={{
                                input: {
                                    color: "#fff",
                                    bgcolor: "#5600b2",
                                    borderRadius: "15px",
                                    padding: "5px 8px",
                                },
                            }}
                        />
                    </Box>
                    <Droppable droppableId={list.id.toString()} type={"TASKS"}>
                        {(provided) => (
                            <Stack
                                sx={{
                                    minWidth: "300px",
                                    padding: "15px 10px",
                                    overflow: "hidden",
                                }}
                                direction={"column"}
                                spacing={2}
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {tasks.map((task, index) => (
                                    <Task
                                        key={task.id}
                                        task={task}
                                        index={index}
                                        onCompleteHandler={CompleteTask}
                                        onDeleteHandler={DeleteTask}
                                    />
                                ))}
                                {provided.placeholder}
                            </Stack>
                        )}
                    </Droppable>
                </Box>
            )}
        </Draggable>
    );
};

export default React.memo(List);
