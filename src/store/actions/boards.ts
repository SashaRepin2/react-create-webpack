import { createAction } from "@reduxjs/toolkit";

import { IBoard } from "@interfaces/IBoard";

const BOARDS_ADD_BOARD = "BOARDS/ADD_BOARD";
const BOARDS_MOVE_LIST = "BOARDS/MOVE_LIST";
const BOARDS_UPDATE_BOARD_TITLE = "BOARDS/UPDATE_BOARD_TITLE";
const BOARDS_DELETE_BOARD = "BOARDS/DELETE_BOARD";
const BOARDS_ADD_BOARD_LIST = "BOARDS/ADD_BOARD_LIST";
const BOARDS_DELETE_BOARD_LIST = "BOARDS/DELETE_BOARD_LIST";

const BOARDS_UPDATE_STORE = "BOARDS/UPDATE_STORE";

const BOARDS_REQUEST_LOADING = "BOARDS/REQUEST_LOADING";
const BOARDS_REQUEST_SUCCESS = "BOARDS/REQUEST_SUCCESS";
const BOARDS_REQUEST_ERROR = "BOARDS/REQUEST_ERROR";

export const boardsUpdateStoreAction = createAction<boolean>(BOARDS_UPDATE_STORE);

// Requests actions
export const boardsRequestSuccessAction = createAction(BOARDS_REQUEST_SUCCESS);
export const boardsRequestErrorAction = createAction(BOARDS_REQUEST_ERROR);
export const boardsRequestLoadingAction = createAction(BOARDS_REQUEST_LOADING);

/**
 * Add board to storage
 */
export const boardsAddBoardAction = createAction<IBoard>(BOARDS_ADD_BOARD);

/**
 * Change list position in board
 */
export const boardsMoveListAction = createAction<{
    board: IBoard;
    sequenceLists: number[];
}>(BOARDS_MOVE_LIST);

/**
 * Update board title
 */
export const boardsUpdateBoardTitleAction = createAction<{
    board: IBoard;
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
    board: IBoard;
    sequenceLists: number[];
}>(BOARDS_ADD_BOARD_LIST);

/**
 * Delete list from board
 */
export const boardsDeleteBoardListAction = createAction<{
    board: IBoard;
    sequenceLists: number[];
}>(BOARDS_DELETE_BOARD_LIST);
