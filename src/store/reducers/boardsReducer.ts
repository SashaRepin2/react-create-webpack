import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { REQUEST_STATUSES } from "@consts/requestStatuses";

import {
    boardsAddBoardAction,
    boardsAddBoardListAction,
    boardsDeleteBoardAction,
    boardsDeleteBoardListAction,
    boardsMoveListAction,
    boardsUpdateBoardTitleAction,
} from "@store/actions/boards";
import { getBoardsThunk } from "@store/thunk/boards";

import { IBoard } from "@interfaces/IBoard";

interface IBoardState {
    boards: IBoard[];
    status: string;
    error: string | null;
}

const initialState: IBoardState = {
    boards: [],
    status: REQUEST_STATUSES.IDLE,
    error: null,
};

const boardReducer = createReducer(initialState, (builder) => {
    builder.addCase(boardsAddBoardAction, (state, action: PayloadAction<IBoard>) => {
        state.boards.push(action.payload);
    });

    builder.addCase(boardsDeleteBoardAction, (state, action: PayloadAction<number>) => {
        state.boards = state.boards.filter((board) => board.id !== action.payload);
    });

    builder.addCase(
        boardsAddBoardListAction,
        (
            state,
            action: PayloadAction<{
                boardId: number;
                listId: number;
            }>
        ) => {
            const { boardId, listId } = action.payload;
            const board = state.boards.find((board) => board.id === boardId);

            if (board) {
                board.sequenceLists.push(listId);
            }
        }
    );

    builder.addCase(
        boardsDeleteBoardListAction,
        (
            state,
            action: PayloadAction<{
                boardId: number;
                listId: number;
            }>
        ) => {
            const { boardId, listId } = action.payload;
            const board = state.boards.find((board) => board.id === boardId);

            if (board) {
                board.sequenceLists = board.sequenceLists.filter((id) => id !== listId);
            }
        }
    );

    builder.addCase(
        boardsMoveListAction,
        (
            state,
            action: PayloadAction<{
                oldIndex: number;
                newIndex: number;
                boardId: number;
            }>
        ) => {
            const { oldIndex, newIndex, boardId } = action.payload;
            const board = state.boards.find((board) => board.id === boardId);

            if (board) {
                const [movingList] = board.sequenceLists.splice(oldIndex, 1);
                board.sequenceLists.splice(newIndex, 0, movingList);
            }
        }
    );

    builder.addCase(
        boardsUpdateBoardTitleAction,
        (
            state,
            action: PayloadAction<{
                idBoard: number;
                newTitle: string;
            }>
        ) => {
            const { idBoard, newTitle } = action.payload;
            const board = state.boards.find((board) => board.id === idBoard);

            if (board) {
                board.title = newTitle;
            }
        }
    );

    builder.addCase(getBoardsThunk.pending, (state) => {
        state.status = REQUEST_STATUSES.LOADING;
        state.error = null;
    });

    builder.addCase(getBoardsThunk.fulfilled, (state, action) => {
        state.status = REQUEST_STATUSES.IDLE;
    });

    builder.addCase(getBoardsThunk.rejected, (state, action) => {
        if (action.payload) {
            state.error = action.payload;
        } else {
            state.error = null;
        }

        state.status = REQUEST_STATUSES.REJECTED;
    });
});

export default boardReducer;
