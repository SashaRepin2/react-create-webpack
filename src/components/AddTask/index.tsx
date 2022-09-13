import React, { memo, useState } from "react";

import Input from "@components/UI/Input";

import useAppDispatch from "@hooks/useAppDispatch";

import { listsAddListTaskAction } from "@src/store/actions/lists";
import { tasksAddTaskAction } from "@src/store/actions/tasks";

import { Statuses } from "@interfaces/ITask";

interface IAddTaskProps {
    listId: number;
}

const AddTask: React.FC<IAddTaskProps> = ({ listId }) => {
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState<string>("");

    function onKeyDownHandler(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.code === "Enter") {
            if (inputValue) {
                const task = {
                    id: Date.now(),
                    title: inputValue,
                    status: Statuses.UNCOMPLETE,
                    labels: [],
                };
                dispatch(tasksAddTaskAction(task));
                dispatch(
                    listsAddListTaskAction({
                        listId,
                        taskId: task.id,
                    }),
                );
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

export default memo(AddTask);
