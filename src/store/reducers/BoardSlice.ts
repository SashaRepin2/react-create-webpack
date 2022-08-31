import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { REQUEST_STATUSES } from "../../consts/requestStatuses";

import { IBoard } from "../../interfaces/IBoard";

import getBoardsThunk from "../thunk/boards";

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

export const BoardSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {
        addBoard(state, action: PayloadAction<IBoard>) {
            state.boards.push(action.payload);
        },
        updateBoardTitle(state, action: PayloadAction<{ idBoard: number; newTitle: string }>) {
            const { idBoard, newTitle } = action.payload;
            const board = state.boards.find((board) => board.id === idBoard);

            if (board) {
                board.title = newTitle;
            }
        },
        deleteBoard(state, action: PayloadAction<number>) {
            state.boards = state.boards.filter((board) => board.id !== action.payload);
        },
        addBoardList(state, action: PayloadAction<{ boardId: number; listId: number }>) {
            const { boardId, listId } = action.payload;
            const board = state.boards.find((board) => board.id === boardId);

            if (board) {
                board.sequenceLists.push(listId);
            }
        },
        moveList(
            state,
            action: PayloadAction<{ oldIndex: number; newIndex: number; boardId: number }>
        ) {
            const { oldIndex, newIndex, boardId } = action.payload;
            const board = state.boards.find((board) => board.id === boardId);

            if (board) {
                const [movingList] = board.sequenceLists.splice(oldIndex, 1);
                board.sequenceLists.splice(newIndex, 0, movingList);
            }
        },
        deleteListFromBoard(state, action: PayloadAction<{ boardId: number; listId: number }>) {
            const { boardId, listId } = action.payload;

            const board = state.boards.find((board) => board.id === boardId);

            if (board) {
                board.sequenceLists = board.sequenceLists.filter((id) => id !== listId);
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getBoardsThunk.pending, (state) => {
            state.status = REQUEST_STATUSES.LOADING;
            state.error = null;
        });
        builder.addCase(getBoardsThunk.fulfilled, (state) => {
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
    },
});

export default BoardSlice.reducer;
