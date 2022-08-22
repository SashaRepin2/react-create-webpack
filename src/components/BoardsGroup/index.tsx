import React from "react";

import { Stack, Typography } from "@mui/material";
import useAppSelector from "../../hooks/useAppSelector";
import useDebounce from "../../hooks/useDebounce";
import { IBoard } from "../../interfaces/IBoard";
import Board from "./components/Board";
import Input from "../UI/Input/Input";

const BoardsGroup: React.FC = () => {
    const boards = useAppSelector((state) => state.boardReducer.boards);
    const [filteredBoards, setFilteredBoards] = React.useState<IBoard[]>(boards);
    const [filterValue, setFilterValue] = React.useState<string>("");
    const debouncedValue = useDebounce(filterValue, 500);

    const onChangeFilterValue = React.useCallback((value: string) => {
        setFilterValue(value);
    }, []);

    React.useEffect(() => {
        setFilteredBoards(
            boards.filter((board) => board.title.toLocaleLowerCase().includes(debouncedValue))
        );
    }, [debouncedValue, boards]);

    return (
        <React.Fragment>
            <Input
                inputValue={filterValue}
                placeholderValue={"Введите название доски"}
                onChangeHandler={onChangeFilterValue}
            />
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
                spacing={2}
                sx={{ padding: "15px 0" }}
            >
                {filteredBoards.length ? (
                    filteredBoards.map((board) => (
                        <Board
                            key={board.id}
                            board={board}
                        />
                    ))
                ) : (
                    <Typography
                        variant={"h5"}
                        sx={{
                            textAlign: "center",
                            color: "#fff",
                            fontWeight: "bold",
                        }}
                    >
                        Ничего не найдено
                    </Typography>
                )}
            </Stack>
        </React.Fragment>
    );
};

export default BoardsGroup;
