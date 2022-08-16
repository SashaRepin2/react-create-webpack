import React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import useAppDispatch from "../../../../../../hooks/useAppDispatch";
import { TaskSlice } from "../../../../../../store/reducers/TaskSlice";
import TaskAddLabel from "../TaskAddLabel";
import { ITask } from "../../../../../../interfaces/ITask";

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
    const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

    function onOpenModalHandler() {
        setIsOpenModal(true);
    }

    function onCloseModalHandler() {
        setIsOpenModal(false);
    }

    function onDeleteTaskHandler(taskId: number) {
        dispatch(deleteTask(taskId));
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
                <MenuItem onClick={() => onDeleteTaskHandler(task.id)}>Удалить</MenuItem>
            </Menu>
            <TaskAddLabel
                task={task}
                isShow={isOpenModal}
                onCloseHandler={onCloseModalHandler}
            />
        </React.Fragment>
    );
};

export default React.memo(TaskSettingsMenu);
