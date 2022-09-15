import React, { FC, useCallback, useEffect, useMemo, useState } from "react";

import { Container, Stack, Typography } from "@mui/material";

import BoardsGroupBoard from "./components/Board";
import Search from "@components/Search";

import { IBoard } from "@interfaces/IBoard";

interface IBoardsGroupProps {
    boards: IBoard[];
}

const BoardsGroup: FC<IBoardsGroupProps> = ({ boards }) => {
    const [filteredBoards, setFilteredBoards] = useState<IBoard[]>(boards);
    const [filterValue, setFilterValue] = useState<string>("");

    const filteredBoardsList = useMemo(
        () =>
            boards.map((board) => (
                <BoardsGroupBoard
                    key={board.id}
                    board={board}
                />
            )),
        [filteredBoards],
    );

    const onChangeFilterValue = useCallback((value: string) => {
        setFilterValue(value);
    }, []);

    useEffect(() => {
        setFilteredBoards(
            boards.filter((board) => board.title.toLocaleLowerCase().includes(filterValue)),
        );
    }, [filterValue, boards]);

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
                <Search
                    value={filterValue}
                    onChangeHandler={onChangeFilterValue}
                />
            </Container>
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
                spacing={2}
                sx={{
                    padding: "15px 0",
                }}
            >
                {filteredBoards.length ? (
                    filteredBoardsList
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
