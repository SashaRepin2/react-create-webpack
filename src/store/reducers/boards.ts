import { createReducer } from "@reduxjs/toolkit";

import {
    boardsAddBoardAction,
    boardsAddBoardListAction,
    boardsDeleteBoardAction,
    boardsDeleteBoardListAction,
    boardsMoveListAction,
    boardsUpdateStoreAction,
} from "@store/actions/boards";
import { getBoardsThunk } from "@store/thunk/boards";

import { IBoard } from "@interfaces/IBoard";

interface IBoardState {
    boards: IBoard[];
    isLoading: boolean;
}

const initialState: IBoardState = {
    boards: [],
    isLoading: false,
};

const boardReducer = createReducer(initialState, (builder) => {
    builder.addCase(boardsAddBoardAction, (state, action) => {
        return {
            ...state,
            boards: [...state.boards, action.payload],
        };
    });

    builder.addCase(boardsDeleteBoardAction, (state, action) => {
        return {
            ...state,
            boards: state.boards.filter((board) => board.id !== action.payload),
        };
    });

    builder.addCase(boardsAddBoardListAction, (state, action) => {
        const { board, sequenceLists } = action.payload;

        return {
            ...state,
            boards: state.boards.map((_board) =>
                _board.id === board.id
                    ? {
                          ...board,
                          sequenceLists,
                      }
                    : _board,
            ),
        };
    });

    builder.addCase(boardsDeleteBoardListAction, (state, action) => {
        const { board, sequenceLists } = action.payload;

        return {
            ...state,
            boards: state.boards.map((_board) =>
                _board.id === board.id
                    ? {
                          ...board,
                          sequenceLists,
                      }
                    : _board,
            ),
        };
    });

    builder.addCase(boardsMoveListAction, (state, action) => {
        const { board, sequenceLists } = action.payload;

        return {
            ...state,
            boards: state.boards.map((_board) =>
                _board.id === board.id
                    ? {
                          ...board,
                          sequenceLists,
                      }
                    : _board,
            ),
        };
    });

    builder.addCase(getBoardsThunk.fulfilled, (state) => {
        // state.isLoading = true;
    });

    builder.addCase(boardsUpdateStoreAction, (state, action) => {
        state.isLoading = action.payload;
    });
});

export default boardReducer;
