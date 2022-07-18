import React from "react";

import { InputBase } from "@mui/material";

import useAppDispatch from "../../../../hooks/useAppDispatch";
import { ListSlice } from "../../../../store/reducers/ListSlice";
import { TaskSlice } from "../../../../store/reducers/TaskSlice";
import { Statuses } from "../../../../interfaces/ITask";

interface AddListProps {
    listId: number;
}

const AddTask: React.FC<AddListProps> = ({ listId }) => {
    const dispatch = useAppDispatch();
    const { addTask } = TaskSlice.actions;
    const { addListTask } = ListSlice.actions;
    const [inputValue, setInputValue] = React.useState<string>("");

    function onKeyDownHandler(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.code === "Enter") {
            if (inputValue) {
                const task = {
                    id: Date.now(),
                    title: inputValue,
                    status: Statuses.UNCOMPLETE,
                };
                dispatch(addTask(task));
                dispatch(addListTask({ listId, taskId: task.id }));
                setInputValue("");
            }
        }
    }

    return (
        <InputBase
            value={inputValue}
            placeholder={"Название задания"}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={onKeyDownHandler}
            sx={{
                input: {
                    color: "#fff",
                    bgcolor: "#5600b2",
                    borderRadius: "15px",
                    padding: "5px 8px",
                },
            }}
        />
    );
};

export default React.memo(AddTask);
