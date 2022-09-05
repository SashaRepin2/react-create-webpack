import React from "react";

import { Box, Container, Typography } from "@mui/material";

import AddLabelList from "./components/List";

import useAppDispatch from "../../../../hooks/useAppDispatch";
import useAppSelector from "../../../../hooks/useAppSelector";

import { TaskSlice } from "../../../../store/reducers/tasksReducer";

import { ILabel } from "../../../../interfaces/ILabel";
import { ITask } from "../../../../interfaces/ITask";

import BaseModal from "../../../UI/BaseModal";

interface ITaskAddLabelProps {
    task: ITask;
    isShow: boolean;
    onCloseHandler: () => void;
}

const TaskAddLabel: React.FC<ITaskAddLabelProps> = ({ task, isShow, onCloseHandler }) => {
    const dispatch = useAppDispatch();
    const { addLabelToTask, deleteLabelFromTask } = TaskSlice.actions;

    const activeLabels = useAppSelector((state) =>
        state.labelsReducer.labels.filter((label) => task.labels.includes(label.id))
    );

    const inactiveLabels = useAppSelector((state) =>
        state.labelsReducer.labels.filter((label) => !task.labels.includes(label.id))
    );

    function onAddHandler(label: ILabel) {
        dispatch(addLabelToTask({ taskId: task.id, labelId: label.id }));
    }

    function onDeleteHandler(label: ILabel) {
        dispatch(deleteLabelFromTask({ taskId: task.id, labelId: label.id }));
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
                            sx={{ color: "#fff", fontWeight: "bold" }}
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

export default React.memo(TaskAddLabel);
