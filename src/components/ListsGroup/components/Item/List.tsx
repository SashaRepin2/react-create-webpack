import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Draggable, Droppable } from "react-beautiful-dnd";

import useAppSelector from "../../../../hooks/useAppSelector";

import { DND_TYPES_TASKS } from "../../../../consts/dndTypes";

import { IList } from "../../../../interfaces/IList";
import { ITask } from "../../../../interfaces/ITask";

import AddList from "../../../AddTask/AddTask";
import Task from "../../../Task";

interface ListProps {
    list: IList;
    index: number;
    onDeleteHandler: (list: IList) => void;
}

const List: React.FC<ListProps> = ({ list, index, onDeleteHandler }) => {
    const tasks = useAppSelector((state) => {
        const listTasks = state.taskReducer.tasks.filter((task) =>
            list.sequenceTasks.includes(task.id)
        );

        return listTasks.sort(
            (prevTask: ITask, nextTask: ITask) =>
                list.sequenceTasks.indexOf(prevTask.id) - list.sequenceTasks.indexOf(nextTask.id)
        );
    });

    return (
        <Draggable
            draggableId={list.id.toString()}
            index={index}
        >
            {(provided) => (
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
                        <Typography
                            variant={"h6"}
                            sx={{ color: "#fff", marginBottom: "10px" }}
                        >
                            {list.title}
                        </Typography>
                        <AddList listId={list.id} />
                    </Box>
                    <Droppable
                        droppableId={list.id.toString()}
                        type={DND_TYPES_TASKS}
                    >
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
