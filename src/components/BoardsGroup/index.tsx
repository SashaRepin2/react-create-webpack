import React from "react";

import { Container, Stack, Typography } from "@mui/material";

import Board from "./components/Item";

import useAppSelector from "../../hooks/useAppSelector";
import useDebounce from "../../hooks/useDebounce";

import { IBoard } from "../../interfaces/IBoard";

import Input from "../UI/Input";

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
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "15px",
                }}
            >
                <Input
                    inputValue={filterValue}
                    placeholderValue={"Введите название доски"}
                    onChangeHandler={onChangeFilterValue}
                />
            </Container>
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
