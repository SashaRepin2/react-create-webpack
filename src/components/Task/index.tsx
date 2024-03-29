import React, { FC, memo, useState } from "react";

import { Box } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";

import TaskLabelsGroup from "./components/LabelsGroup";
import TaskSettingsMenu from "./components/SettingsMenu";
import TaskTitle from "./components/Title";

import useAppSelector from "@hooks/useAppSelector";

import { selectTaskLabels } from "@store/selectors";

import { ITask, Statuses } from "@interfaces/ITask";

interface ITaskProps {
    index: number;
    task: ITask;
    isOnlyView?: boolean;
}

const Task: FC<ITaskProps> = ({ index, task, isOnlyView = false }) => {
    const labels = useAppSelector((state) => selectTaskLabels(state, task));

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isOpenSettingsMenu = Boolean(anchorEl);

    function onOpenMenuHandler(event: React.MouseEvent<HTMLElement>) {
        setAnchorEl(event.currentTarget);
    }

    function onCloseMenuHandle() {
        setAnchorEl(null);
    }

    return (
        <Draggable
            index={index}
            draggableId={task.id.toString()}
            isDragDisabled={isOnlyView}
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
                    <TaskTitle title={task.title} />
                    <TaskLabelsGroup labels={labels} />
                    {!isOnlyView && (
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
                    )}
                </Box>
            )}
        </Draggable>
    );
};

export default memo(Task);
