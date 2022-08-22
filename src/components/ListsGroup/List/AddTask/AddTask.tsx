import React from "react";

import useAppDispatch from "../../../../hooks/useAppDispatch";
import { ListSlice } from "../../../../store/reducers/ListSlice";
import { TaskSlice } from "../../../../store/reducers/TaskSlice";
import { Statuses } from "../../../../interfaces/ITask";
import Input from "../../../UI/Input/Input";

interface AddTaskProps {
    listId: number;
}

const AddTask: React.FC<AddTaskProps> = ({ listId }) => {
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
        <Input
            inputValue={inputValue}
            placeholderValue={"Название задания"}
            onChangeHandler={setInputValue}
            onKeyDownHandler={onKeyDownHandler}
        />
    );
};

export default React.memo(AddTask);
