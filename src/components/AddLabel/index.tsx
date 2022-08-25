import React from "react";

import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

import AddLabelList from "./components/List";

import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";

import { TaskSlice } from "../../store/reducers/TaskSlice";

import { ILabel } from "../../interfaces/ILabel";
import { ITask } from "../../interfaces/ITask";

import ModalPopup from "../UI/BaseModal";

interface IAddLabelProps {
    task: ITask;
    isShow: boolean;
    onCloseHandler: () => void;
}

const AddLabel: React.FC<IAddLabelProps> = ({ task, isShow, onCloseHandler }) => {
    const dispatch = useAppDispatch();
    const { addLabelToTask, deleteLabelFromTask } = TaskSlice.actions;

    const activeLabels = useAppSelector((state) =>
        state.labelReducer.labels.filter((label) => task.labels.includes(label.id))
    );

    const inactiveLabels = useAppSelector((state) =>
        state.labelReducer.labels.filter((label) => !task.labels.includes(label.id))
    );

    function onAddHandler(label: ILabel) {
        dispatch(addLabelToTask({ taskId: task.id, labelId: label.id }));
    }

    function onDeleteHandler(label: ILabel) {
        dispatch(deleteLabelFromTask({ taskId: task.id, labelId: label.id }));
    }

    return (
        <div>
            <ModalPopup
                title={"Управление метками"}
                isShow={isShow}
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
            </ModalPopup>
        </div>
    );
};

export default React.memo(AddLabel);
