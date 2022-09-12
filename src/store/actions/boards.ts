import { createAction } from "@reduxjs/toolkit";

import { IBoard } from "@interfaces/IBoard";

const BOARDS_ADD_BOARD = "BOARDS/ADD_BOARD";
const BOARDS_MOVE_LIST = "BOARDS/MOVE_LIST";

export const boardsAddBoardAction = createAction<IBoard>(BOARDS_ADD_BOARD);
export const boardsMoveListAction = createAction<IBoard>(BOARDS_MOVE_LIST);
