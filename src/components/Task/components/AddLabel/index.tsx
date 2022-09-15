import React, { FC, memo } from "react";

import { Box, Container, Typography } from "@mui/material";

import AddLabelList from "./components/List";
import BaseModal from "@components/UI/BaseModal";

import useAppDispatch from "@hooks/useAppDispatch";
import useAppSelector from "@hooks/useAppSelector";

import { tasksAddTaskLabelAction, tasksDeleteTaskLabelAction } from "@src/store/actions/tasks";
import { selectNotTaskLabels, selectTaskLabels } from "@store/selectors";

import { ILabel } from "@interfaces/ILabel";
import { ITask } from "@interfaces/ITask";

interface ITaskAddLabelProps {
    task: ITask;
    isShow: boolean;
    onCloseHandler: () => void;
}

const TaskAddLabel: FC<ITaskAddLabelProps> = ({ task, isShow, onCloseHandler }) => {
    const dispatch = useAppDispatch();
    const activeLabels = useAppSelector((state) => selectTaskLabels(state, task));
    const inactiveLabels = useAppSelector((state) => selectNotTaskLabels(state, task));

    function onAddHandler(label: ILabel) {
        dispatch(
            tasksAddTaskLabelAction({
                taskId: task.id,
                labelId: label.id,
            }),
        );
    }

    function onDeleteHandler(label: ILabel) {
        dispatch(
            tasksDeleteTaskLabelAction({
                taskId: task.id,
                labelId: label.id,
            }),
        );
    }

    return (
        <div>
            <BaseModal
                isOpen={isShow}
                title={"Добавление метки"}
                onClose={onCloseHandler}
            >
                <Container>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            variant={"h6"}
                            sx={{
                                color: "#fff",
                                fontWeight: "bold",
                            }}
                        >
                            {task.title}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            bgcolor: "purple",
                            borderRadius: "5px",
                            padding: "5px",
                            margin: "15px 5px",
                        }}
                    >
                        <AddLabelList
                            title={"Активные"}
                            labels={activeLabels}
                            onClickLabelHandler={onDeleteHandler}
                        />
                    </Box>

                    <Box
                        sx={{
                            bgcolor: "purple",
                            borderRadius: "5px",
                            padding: "5px",
                            margin: "15px 5px",
                        }}
                    >
                        <AddLabelList
                            title={"Неактивные"}
                            labels={inactiveLabels}
                            onClickLabelHandler={onAddHandler}
                        />
                    </Box>
                </Container>
            </BaseModal>
        </div>
    );
};

export default memo(TaskAddLabel);
