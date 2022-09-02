import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import PreviewIcon from "@mui/icons-material/Preview";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import useAppDispatch from "../../../../hooks/useAppDispatch";

import { LINKS_BOARD_PAGE } from "../../../../consts/links";
import { TEXT_MAX_LENGTH } from "../../../../consts/text";

import { BoardSlice } from "../../../../store/reducers/BoardSlice";

import { IBoard } from "../../../../interfaces/IBoard";

import QuickViewBoard from "../../../QuickViewBoard";
import AlertDialog from "../../../UI/AlertDialog";

interface IBoardsGroupBoardProps {
    board: IBoard;
}

const BoardsGroupBoard: React.FC<IBoardsGroupBoardProps> = ({ board }) => {
    const dispatch = useAppDispatch();
    const { deleteBoard } = BoardSlice.actions;

    const [isOpenDialog, setIsOpenDialog] = React.useState<boolean>(false);
    const [isOpenQuickView, setIsOpenQuickView] = React.useState<boolean>(false);

    function onOpenDialogHandler(event: React.MouseEvent<HTMLButtonElement>) {
        setIsOpenDialog(true);
    }

    function onCloseDialogHandler() {
        setIsOpenDialog(false);
    }

    function onSubmitDialogHandler() {
        dispatch(deleteBoard(board.id));
    }

    function onOpenQuickViewHandler() {
        setIsOpenQuickView(true);
    }

    function onCloseQuickViewHandler() {
        setIsOpenQuickView(false);
    }

    return (
        <React.Fragment>
            <Link
                to={LINKS_BOARD_PAGE.replace(":boardId", board.id.toString())}
                style={{ textDecoration: "none" }}
            >
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        bgcolor: "#8458b3;",
                        borderRadius: "10px",
                        "&:hover": {
                            bgcolor: "#57327e",
                        },
                    }}
                >
                    <Typography
                        variant={"h6"}
                        sx={{ color: "#fff" }}
                    >
                        {board.title.length > TEXT_MAX_LENGTH
                            ? board.title.slice(0, TEXT_MAX_LENGTH) + "..."
                            : board.title}
                    </Typography>
                    <Box onClick={(e) => e.preventDefault()}>
                        <IconButton onClick={onOpenQuickViewHandler}>
                            <PreviewIcon />
                        </IconButton>
                        <IconButton onClick={onOpenDialogHandler}>
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </Container>
            </Link>
            <QuickViewBoard
                board={board}
                isOpen={isOpenQuickView}
                onClose={onCloseQuickViewHandler}
            />
            <AlertDialog
                isOpen={isOpenDialog}
                title={"Удаление доски"}
                description={`Вы действительно хотите удалить доску "${board.title}"`}
                submitTextBtn={"Удалить"}
                onClose={onCloseDialogHandler}
                onSubmit={onSubmitDialogHandler}
            />
        </React.Fragment>
    );
};

export default React.memo(BoardsGroupBoard);