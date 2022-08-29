import React from "react";

import { Box, Typography } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";

import TaskLabel from "./components/Label";
import TaskSettingsMenu from "./components/SettingsMenu";

import useAppSelector from "../../hooks/useAppSelector";

import { ITask, Statuses } from "../../interfaces/ITask";

interface ItemProps {
    index: number;
    task: ITask;
}

const Task: React.FC<ItemProps> = ({ index, task }) => {
    const labels = useAppSelector((state) =>
        state.labelReducer.labels.filter((label) => task.labels.includes(label.id))
    );

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isOpenSettingsMenu = Boolean(anchorEl);

    function onOpenMenuHandler(event: React.MouseEvent<HTMLElement>) {
        setAnchorEl(event.currentTarget);
    }

    function onCloseMenuHandle() {
        setAnchorEl(null);
    }

    return (
        <React.Fragment>
            <Draggable
                draggableId={task.id.toString()}
                index={index}
            >
                {(provided) => (
                    <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        sx={{
                            maxWidth: "300px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderRadius: "10px",
                            padding: "5px 10px",
                            bgcolor: task.status === Statuses.COMPLETE ? "green" : "#fff",
                        }}
                    >
                        <Typography variant={"subtitle1"}>{task.title}</Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", margin: "0 5px" }}>
                            {labels.map((label) => (
                                <TaskLabel
                                    key={label.id}
                                    label={label}
                                />
                            ))}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <TaskSettingsMenu
                                task={task}
                                isOpen={isOpenSettingsMenu}
                                anchorEl={anchorEl}
                                onClickHanlder={onOpenMenuHandler}
                                onCloseHanlder={onCloseMenuHandle}
                            />
                        </Box>
                    </Box>
                )}
            </Draggable>
        </React.Fragment>
    );
};

export default React.memo(Task);
