import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@store/store";

const selectListId = (state: RootState, listId: number) => listId;

export const selectLists = (state: RootState) => state.listsReducer.lists;

export const selectListById = createSelector([selectLists, selectListId], (lists, listId) => {
    return lists.find((list) => list.id === listId);
});

const listsSelector = {
    selectLists,
    selectListById,
};

export default listsSelector;
