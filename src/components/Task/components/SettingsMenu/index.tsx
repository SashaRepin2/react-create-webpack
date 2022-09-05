import React, { useState } from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";

import useAppDispatch from "../../../../hooks/useAppDispatch";

import { TaskSlice } from "../../../../store/reducers/tasksReducer";

import { ITask } from "../../../../interfaces/ITask";

import AlertDialog from "../../../UI/AlertDialog";
import TaskAddLabel from "../AddLabel";

interface ITaskSettingsMenuProps {
    task: ITask;
    anchorEl: HTMLElement | null;
    isOpen: boolean;
    onClickHanlder: (event: React.MouseEvent<HTMLElement>) => void;
    onCloseHanlder: () => void;
}

const TaskSettingsMenu: React.FC<ITaskSettingsMenuProps> = ({
    task,
    anchorEl,
    isOpen,
    onClickHanlder,
    onCloseHanlder,
}) => {
    const dispatch = useAppDispatch();
    const { deleteTask } = TaskSlice.actions;
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

    function onOpenModalHandler() {
        setIsOpenModal(true);
        onCloseHanlder();
    }

    function onCloseModalHandler() {
        setIsOpenModal(false);
    }

    function onOpenDialogHandler() {
        setIsOpenDialog(true);
    }

    function onCloseDialogHandler() {
        setIsOpenDialog(false);
    }

    function onSubmitDialogHandler() {
        dispatch(deleteTask(task.id));
    }

    return (
        <React.Fragment>
            <IconButton
                aria-label={"more"}
                id={"long-button"}
                aria-controls={isOpen ? "long-menu" : undefined}
                aria-expanded={isOpen ? "true" : undefined}
                aria-haspopup={"true"}
                onClick={onClickHanlder}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id={"long-menu"}
                open={isOpen}
                anchorEl={anchorEl}
                onClose={onCloseHanlder}
                MenuListProps={{
                    "aria-labelledby": "long-button",
                }}
            >
                <MenuItem onClick={onOpenModalHandler}>Метки</MenuItem>
                <MenuItem onClick={onOpenDialogHandler}>Удалить</MenuItem>
            </Menu>
            <TaskAddLabel
                task={task}
                isShow={isOpenModal}
                onCloseHandler={onCloseModalHandler}
            />
            <AlertDialog
                isOpen={isOpenDialog}
                title={"Удаление задачи"}
                description={`Вы действительно хотите удалить задачу "${task.title}"`}
                submitTextBtn={"Удалить"}
                onClose={onCloseDialogHandler}
                onSubmit={onSubmitDialogHandler}
            />
        </React.Fragment>
    );
};

export default React.memo(TaskSettingsMenu);
