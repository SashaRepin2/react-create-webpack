import React, { FC, useCallback, useEffect, useState } from "react";

import { Container } from "@mui/material";
import { ToastContainer } from "react-toastify";

import BoardsGroup from "../components/BoardsGroup";
import BoardForm from "../components/Forms/BoardForm";
import Loader from "@components/UI/Loader";

import useAppDispatch from "@hooks/useAppDispatch";
import useAppSelector from "@hooks/useAppSelector";

import boardsSelector from "@store/selectors/boards";
import { getBoardsThunk } from "@store/thunk/boards";

const HomePage: FC = () => {
    const dispatch = useAppDispatch();
    const boards = useAppSelector(boardsSelector.selectBoards);
    const isLoading = useAppSelector(boardsSelector.selectIsLoading);
    console.log(isLoading);

    const [isExpandedForm, setIsExpandedForm] = useState<boolean>(false);

    useEffect(() => {
        dispatch(getBoardsThunk());
    }, []);

    const onChangeFormExpanded = useCallback(() => {
        setIsExpandedForm(!isExpandedForm);
    }, [isExpandedForm]);

    return (
        <>
            <ToastContainer />
            <Container
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridTemplateRows: "minmax(512px, min-content)",
                    gridGap: "50px",
                    justifyContent: "space-around",
                }}
            >
                <Container>
                    <BoardForm
                        isExpanded={isExpandedForm}
                        setIsExpanded={onChangeFormExpanded}
                    />
                </Container>
                {isLoading ? (
                    <Container
                        sx={{
                            margin: "15px 0",
                        }}
                    >
                        <Loader position={"relative"} />
                    </Container>
                ) : (
                    <BoardsGroup boards={boards} />
                )}
            </Container>
        </>
    );
};

export default HomePage;
