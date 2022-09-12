import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@store/store";

import { IBoard } from "@interfaces/IBoard";

export const selectBoards = (state: RootState): IBoard[] => state.boardsReducer.boards;
export const selectBoardId = (state: RootState, boardId: number) => boardId;

export const selectAllBoards = createSelector([selectBoards], (boards) => boards);

export const selectBoardById = createSelector([selectBoards, selectBoardId], (boards, boardId) => {
    return boards.find((board) => board.id === boardId);
});
