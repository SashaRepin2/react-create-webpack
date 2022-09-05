import React from "react";

import { Box, Container, Typography } from "@mui/material";
import { Params, useParams } from "react-router-dom";

import { ListsGroup } from "../components";
import AddList from "../components/AddList";

import useAppSelector from "../hooks/useAppSelector";

import NotFoundPage from "./NotFoundPage";

const BoardPage: React.FC = () => {
    const { boardId } = useParams<Params>();

    const board = useAppSelector((state) => {
        if (boardId) {
            return state.boardsReducer.boards.find((board) => board.id === +boardId);
        }
    });

    return !board ? (
        <NotFoundPage />
    ) : (
        <Container
            sx={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gridTemplateRows: "min-content 9fr",
                gridGap: "50px",
                alignItems: "flex-start",
                justifyContent: "flex-start",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "nowrap",
                        color: "#fff",
                        bgcolor: "#8458b3",
                        borderRadius: "10px",
                        padding: "15px 20px",
                    }}
                >
                    {`Доска: ${board.title}`}
                </Typography>
                <AddList boardId={board.id} />
            </Box>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    height: "100%",
                    backgroundColor: "#D0BDF4",
                    borderRadius: "10px",
                    boxShadow: 3,
                    padding: "15px 0",
                }}
            >
                <ListsGroup board={board} />
            </Container>
        </Container>
    );
};

export default BoardPage;
