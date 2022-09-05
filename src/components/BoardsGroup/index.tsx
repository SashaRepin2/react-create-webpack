import React, { useCallback, useEffect, useState } from "react";

import { Container, Stack, Typography } from "@mui/material";

import BoardsGroupBoard from "./components/Board";

import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import useDebounce from "../../hooks/useDebounce";

import { selectAllBoards } from "../../store/selectors";
import getBoardsThunk from "../../store/thunk/boards";

import { IBoard } from "../../interfaces/IBoard";

import Input from "../UI/Input";
import Loader from "../UI/Loader";

const BoardsGroup: React.FC = () => {
    const dispatch = useAppDispatch();
    const boards = useAppSelector(selectAllBoards);
    const { status } = useAppSelector((state) => state.boardsReducer);

    const [filteredBoards, setFilteredBoards] = useState<IBoard[]>(boards);
    const [filterValue, setFilterValue] = useState<string>("");
    const debouncedValue = useDebounce(filterValue, 500);

    const onChangeFilterValue = useCallback((value: string) => {
        setFilterValue(value);
    }, []);

    useEffect(() => {
        dispatch(getBoardsThunk());
    }, []);

    useEffect(() => {
        setFilteredBoards(
            boards.filter((board) => board.title.toLocaleLowerCase().includes(debouncedValue))
        );
    }, [debouncedValue, boards]);

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                backgroundColor: "#D0BDF4",
                borderRadius: "10px",
                minWidth: "300px",
                boxShadow: 4,
            }}
        >
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
                {status === "loading" ? (
                    <Container
                        sx={{
                            margin: "15px 0",
                        }}
                    >
                        <Loader position={"relative"} />
                    </Container>
                ) : filteredBoards.length ? (
                    filteredBoards.map((board) => (
                        <BoardsGroupBoard
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
        </Container>
    );
};

export default BoardsGroup;
