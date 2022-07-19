import React from "react";

import { Box, IconButton, InputBase } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useAppDispatch from "../../../hooks/useAppDispatch";
import { ListSlice } from "../../../store/reducers/ListSlice";
import { BoardSlice } from "../../../store/reducers/BoardSlice";

interface AddListProps {
    boardId: number;
}

const AddList: React.FC<AddListProps> = ({ boardId }) => {
    const dispatch = useAppDispatch();

    const { addList } = ListSlice.actions;
    const { addBoardList } = BoardSlice.actions;
    const [inputValue, setInputValue] = React.useState<string>("");

    function onAddListHandler() {
        if (inputValue) {
            const list = {
                id: Date.now(),
                title: inputValue,
                sequenceTasks: [],
            };

            dispatch(addList(list));
            dispatch(addBoardList({ listId: list.id, boardId }));
        }
        setInputValue("");
    }

    return (
        <Box
            sx={{
                color: "#fff",
                bgcolor: "#8458b3",
                borderRadius: "10px",
                padding: "15px 20px",
                marginLeft: "15px",
            }}
        >
            <InputBase
                value={inputValue}
                placeholder={"Название списка"}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                sx={{ input: { color: "#fff" } }}
            />
            <IconButton
                onClick={onAddListHandler}
                sx={{
                    color: "#8458b3",
                    bgcolor: "#D0BDF4",
                    "&:hover": { bgcolor: "#6d28b8" },
                }}
            >
                <AddIcon />
            </IconButton>
        </Box>
    );
};

export default React.memo(AddList);
