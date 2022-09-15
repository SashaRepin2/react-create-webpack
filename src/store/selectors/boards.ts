import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@store/store";

const selectBoardId = (state: RootState, boardId: number) => boardId;

export const selectAll = (state: RootState) => state.boardsReducer;
export const selectBoards = (state: RootState) => state.boardsReducer.boards;
export const selectStatus = (state: RootState) => state.boardsReducer.status;
export const selectError = (state: RootState) => state.boardsReducer.error;

export const selectBoardById = createSelector([selectBoards, selectBoardId], (boards, boardId) => {
    return boards.find((board) => board.id === boardId);
});

const boardsSelector = {
    selectAll,
    selectBoards,
    selectStatus,
    selectError,
    selectBoardById,
};

export default boardsSelector;
