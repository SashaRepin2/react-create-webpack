import { createAction } from "@reduxjs/toolkit";

import { IBoard } from "../../interfaces/IBoard";

const BOARDS_ADD_BOARD = "BOARDS/ADD_BOARD";

export const boardsAddBoardAction = createAction<IBoard>(BOARDS_ADD_BOARD);
