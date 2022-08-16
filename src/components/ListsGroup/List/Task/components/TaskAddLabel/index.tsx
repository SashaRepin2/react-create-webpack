import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useAppDispatch from "../../../../../../hooks/useAppDispatch";
import useAppSelector from "../../../../../../hooks/useAppSelector";
import { ILabel } from "../../../../../../interfaces/ILabel";
import { ITask } from "../../../../../../interfaces/ITask";
import { TaskSlice } from "../../../../../../store/reducers/TaskSlice";
import ModalPopup from "../../../../../UI/BaseModal";
import AddLabelList from "./components/AddLabelList";

interface ITaskAddLabelProps {
    task: ITask;
    isShow: boolean;
    onCloseHandler: () => void;
}

const TaskAddLabel: React.FC<ITaskAddLabelProps> = ({ task, isShow, onCloseHandler }) => {
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
                isShow={isShow}
                onCloseHandle={onCloseHandler}
            >
                <Container>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Typography
                            variant={"h5"}
                            sx={{ color: "#fff", fontWeight: "bold", marginRight: "5px" }}
                        >
                            Задание:
                        </Typography>
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

export default TaskAddLabel;
