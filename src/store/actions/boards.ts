import { createAction } from "@reduxjs/toolkit";

import { IBoard } from "@interfaces/IBoard";

const BOARDS_ADD_BOARD = "BOARDS/ADD_BOARD";
const BOARDS_MOVE_LIST = "BOARDS/MOVE_LIST";
const BOARDS_UPDATE_BOARD_TITLE = "BOARDS/UPDATE_BOARD_TITLE";
const BOARDS_DELETE_BOARD = "BOARDS/DELETE_BOARD";
const BOARDS_ADD_BOARD_LIST = "BOARDS/ADD_BOARD_LIST";
const BOARDS_DELETE_BOARD_LIST = "BOARDS/DELETE_BOARD_LIST";

/**
 * Add board to storage
 */
export const boardsAddBoardAction = createAction<IBoard>(BOARDS_ADD_BOARD);

/**
 * Change list position in board
 */
export const boardsMoveListAction = createAction<{
    oldIndex: number;
    newIndex: number;
    boardId: number;
}>(BOARDS_MOVE_LIST);

/**
 * Update board title
 */
export const boardsUpdateBoardTitleAction = createAction<{
    idBoard: number;
    newTitle: string;
}>(BOARDS_UPDATE_BOARD_TITLE);

/**
 * Delete board from storage
 */
export const boardsDeleteBoardAction = createAction<number>(BOARDS_DELETE_BOARD);

/**
 * Add list to board
 */
export const boardsAddBoardListAction = createAction<{
    boardId: number;
    listId: number;
}>(BOARDS_ADD_BOARD_LIST);

/**
 * Delete list from board
 */
export const boardsDeleteBoardListAction = createAction<{
    boardId: number;
    listId: number;
}>(BOARDS_DELETE_BOARD_LIST);
