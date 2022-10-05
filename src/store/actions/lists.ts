import { createAction } from "@reduxjs/toolkit";

import { IList } from "@src/interfaces/IList";

const LISTS_ADD_LIST = "LISTS/ADD_LIST";
const LISTS_DELETE_LIST = "LISTS/DELETE_LIST";
const LISTS_MOVE_LIST_TASK = "LISTS/MOVE_LIST_TASK";
const LISTS_ADD_LIST_TASK = "LISTS/ADD_LIST_TASK";
const LISTS_DELETE_LIST_TASK = "LISTS/DELETE_LIST_TASK";
const LISTS_DELETE_BOARD_LISTS = "LISTS/DELETE_BOARD_LISTS";

export const listsAddListAction = createAction<IList>(LISTS_ADD_LIST);

export const listsDeleteListAction = createAction<number>(LISTS_DELETE_LIST);

export const listsAddListTaskAction = createAction<{
    list: IList;
    sequenceTasks: number[];
}>(LISTS_ADD_LIST_TASK);

export const listsDeleteListTaskAction = createAction<{
    list: IList;
    sequenceTasks: number[];
}>(LISTS_DELETE_LIST_TASK);

export const listsMoveTaskAction = createAction<{
    oldIndex: number;
    newIndex: number;
    fromList: IList;
    toList: IList;
}>(LISTS_MOVE_LIST_TASK);

export const listsDeleteBoardListsAction = createAction<number[]>(LISTS_DELETE_BOARD_LISTS);
