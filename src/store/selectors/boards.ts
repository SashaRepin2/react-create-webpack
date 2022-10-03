import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@store/store";

const selectBoardId = (state: RootState, boardId: number) => boardId;

export const selectAll = (state: RootState) => state.boardsReducer;
export const selectBoards = (state: RootState) => state.boardsReducer.boards;
export const selectIsLoading = (state: RootState) => state.boardsReducer.isLoading;

export const selectBoardById = createSelector([selectBoards, selectBoardId], (boards, boardId) => {
    return boards.find((board) => board.id === boardId);
});

const boardsSelector = {
    selectAll,
    selectBoards,
    selectIsLoading,
    selectBoardById,
};

export default boardsSelector;
