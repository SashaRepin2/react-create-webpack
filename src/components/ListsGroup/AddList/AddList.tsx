import React from "react";

import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useAppDispatch from "../../../hooks/useAppDispatch";
import { ListSlice } from "../../../store/reducers/ListSlice";
import { BoardSlice } from "../../../store/reducers/BoardSlice";
import Input from "../../UI/Input/Input";

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
                display: "flex",
                alignItems: "center",
                color: "#fff",
                bgcolor: "#8458b3",
                borderRadius: "10px",
                padding: "10px",
                marginLeft: "15px",
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
                    "&:hover": { bgcolor: "#6d28b8" },
                }}
            >
                <AddIcon />
            </IconButton>
        </Box>
    );
};

export default React.memo(AddList);
