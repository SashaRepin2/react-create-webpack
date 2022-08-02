import React from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Task from "./Task/Task";

import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import { IList } from "../../../interfaces/IList";
import { ITask, Statuses } from "../../../interfaces/ITask";
import { TaskSlice } from "../../../store/reducers/TaskSlice";
import AddList from "./AddTask/AddTask";

interface ListProps {
    list: IList;
    index: number;
    onDeleteHandler: (list: IList) => void;
}

const List: React.FC<ListProps> = ({ list, index, onDeleteHandler }) => {
    const dispatch = useAppDispatch();
    const { deleteTask, changeStatus } = TaskSlice.actions;

    const tasks = useAppSelector((state) => {
        const listTasks = state.taskReducer.tasks.filter((task) =>
            list.sequenceTasks.includes(task.id)
        );

        return listTasks.sort(
            (prevTask: ITask, nextTask: ITask) =>
                list.sequenceTasks.indexOf(prevTask.id) - list.sequenceTasks.indexOf(nextTask.id)
        );
    });

    const CompleteTask = React.useCallback((taskId: number) => {
        dispatch(changeStatus({ taskId: taskId, newStatus: Statuses.COMPLETE }));
    }, []);

    const DeleteTask = React.useCallback((taskId: number) => {
        dispatch(deleteTask(taskId));
    }, []);

    return (
        <Draggable draggableId={list.id.toString()} index={index}>
            {(provided, snapshot) => (
                <Box
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    sx={{
                        bgcolor: "#8458b3",
                        borderRadius: "10px",
                        height: "fit-content",
                        maxWidth: "400px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            position: "relative",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            bgcolor: "#400085",
                            padding: "10px 5px",
                            borderRadius: "10px 10px 0 0",
                        }}
                    >
                        <IconButton
                            onClick={() => {
                                onDeleteHandler(list);
                            }}
                            sx={{ position: "absolute", right: "5px", top: "5px", color: "red" }}
                        >
                            <DeleteIcon />
                        </IconButton>
                        <Typography variant={"h6"} sx={{ color: "#fff", marginBottom: "10px" }}>
                            {list.title}
                        </Typography>
                        <AddList listId={list.id} />
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
