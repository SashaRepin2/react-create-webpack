import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@store/store";

export const selectLists = (state: RootState) => state.listsReducer.lists;
export const selectListId = (state: RootState, listId: number) => listId;

export const selectListById = createSelector([selectLists, selectListId], (lists, listId) => {
    return lists.find((list) => list.id === listId);
});
