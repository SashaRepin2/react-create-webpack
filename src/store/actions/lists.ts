import { createAction } from "@reduxjs/toolkit";

import { IList } from "@src/interfaces/ILists";

const LISTS_ADD_LIST = "LISTS/ADD_LIST";
const LISTS_UPDATE_LIST = "LISTS/UPDATE_LIST";
const LISTS_DELETE_LIST = "LISTS/DELETE_LIST";
const LISTS_MOVE_LIST_TASK = "LISTS/MOVE_LIST_TASK";
const LISTS_ADD_LIST_TASK = "LISTS/ADD_LIST_TASK";
const LISTS_DELETE_LIST_TASK = "LISTS/DELETE_LIST_TASK";
const LISTS_DELETE_BOARD_LISTS = "LISTS/DELETE_BOARD_LISTS";

export const listsAddListAction = createAction<IList>(LISTS_ADD_LIST);

export const listsUpdateListAction = createAction<{
    idList: number;
    newTitle: string;
}>(LISTS_UPDATE_LIST);

export const listsDeleteListAction = createAction<number>(LISTS_DELETE_LIST);

export const listsAddListTaskAction = createAction<{
    listId: number;
    taskId: number;
}>(LISTS_ADD_LIST_TASK);

export const listsDeleteListTaskAction = createAction<{
    listId: number;
    taskId: number;
}>(LISTS_DELETE_LIST_TASK);

export const listsMoveTaskAction = createAction<{
    oldIndex: number;
    newIndex: number;
    fromListId: number;
    toListId: number;
}>(LISTS_MOVE_LIST_TASK);

export const listsDeleteBoardListsAction = createAction<number[]>(LISTS_DELETE_BOARD_LISTS);
