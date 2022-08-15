import React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import useAppDispatch from "../../../../../../hooks/useAppDispatch";
import { TaskSlice } from "../../../../../../store/reducers/TaskSlice";

interface ITaskSettingsMenuProps {
    taskId: number;
    anchorEl: HTMLElement | null;
    isOpen: boolean;
    onClickHanlder: (event: React.MouseEvent<HTMLElement>) => void;
    onCloseHanlder: () => void;
}

const TaskSettingsMenu: React.FC<ITaskSettingsMenuProps> = ({
    taskId,
    anchorEl,
    isOpen,
    onClickHanlder,
    onCloseHanlder,
}) => {
    const dispatch = useAppDispatch();
    const { deleteTask } = TaskSlice.actions;

    const onDeleteTaskHandler = React.useCallback((taskId: number) => {
        dispatch(deleteTask(taskId));
    }, []);

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
                <MenuItem>Метки</MenuItem>
                <MenuItem onClick={() => onDeleteTaskHandler(taskId)}>Удалить</MenuItem>
            </Menu>
        </React.Fragment>
    );
};

export default React.memo(TaskSettingsMenu);
