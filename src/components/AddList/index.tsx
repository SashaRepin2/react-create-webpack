import React, { FC, memo, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton } from "@mui/material";

import Input from "@components/UI/Input";

import useAppDispatch from "@hooks/useAppDispatch";

import { boardsAddBoardListAction } from "@src/store/actions/boards";
import { listsAddListAction } from "@src/store/actions/lists";

import { IBoard } from "@src/interfaces/IBoard";

interface IAddListProps {
    board: IBoard;
}

const AddList: FC<IAddListProps> = ({ board }) => {
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState<string>("");

    function onAddListHandler() {
        if (inputValue) {
            const list = {
                id: Date.now(),
                title: inputValue,
                sequenceTasks: [],
            };

            const sequenceLists = [...board.sequenceLists, list.id];

            dispatch(listsAddListAction(list));
            dispatch(
                boardsAddBoardListAction({
                    board,
                    sequenceLists,
                }),
            );
        }
        setInputValue("");
    }

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                margin: "0 15px",
                gap: "10px",
                color: "#fff",
                bgcolor: "#8458b3",
                borderRadius: "10px",
            }}
        >
            <Input
                inputValue={inputValue}
                placeholderValue={"Название списка"}
                onChangeHandler={setInputValue}
            />
            <IconButton
                onClick={onAddListHandler}
                sx={{
                    color: "#8458b3",
                    bgcolor: "#D0BDF4",
                    "&:hover": {
                        bgcolor: "#6d28b8",
                    },
                }}
            >
                <AddIcon />
            </IconButton>
        </Box>
    );
};

export default memo(AddList);
