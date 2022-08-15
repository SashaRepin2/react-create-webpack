import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { ITask, Statuses } from "../../../../interfaces/ITask";

import useAppSelector from "../../../../hooks/useAppSelector";
import TaskSettingsMenu from "./components/TaskSettingsMenu";
import TaskLabel from "./components/TaskLabel";

interface ItemProps {
    index: number;
    task: ITask;
}

const Task: React.FC<ItemProps> = ({ index, task }) => {
    const labels = useAppSelector((state) =>
        state.labelReducer.labels.filter((label) => task.labels.includes(label.id))
    );

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const onOpenMenuHandler = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const onCloseMenuHandle = () => {
        setAnchorEl(null);
    };

    return (
        <Draggable
            draggableId={task.id.toString()}
            index={index}
        >
            {(provided) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: "10px",
                        padding: "5px",
                        bgcolor: task.status === Statuses.COMPLETE ? "green" : "#fff",
                    }}
                >
                    <Typography variant={"subtitle1"}>{task.title}</Typography>
                    <Box>
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
                            taskId={task.id}
                            isOpen={open}
                            anchorEl={anchorEl}
                            onClickHanlder={onOpenMenuHandler}
                            onCloseHanlder={onCloseMenuHandle}
                        />
                    </Box>
                </Container>
            )}
        </Draggable>
    );
};

export default React.memo(Task);
