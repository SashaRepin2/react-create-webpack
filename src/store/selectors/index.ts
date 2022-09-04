import { createSelector } from "@reduxjs/toolkit";

import { IBoard } from "../../interfaces/IBoard";
import { ILabel } from "../../interfaces/ILabel";
import { IList } from "../../interfaces/IList";
import { ITask } from "../../interfaces/ITask";

import { RootState } from "..";

export const selectAllLists = (state: RootState): IList[] => state.listReducer.lists;
export const selectAllBoards = (state: RootState): IBoard[] => state.boardReducer.boards;
export const selectAllLabel = (state: RootState): ILabel[] => state.labelReducer.labels;

export const selectBoardSortedLists = createSelector(
    [selectAllLists, (state, board): IBoard => board],
    (allLists, board) => {
        const boardLists = allLists.filter((list) => board.sequenceLists.includes(list.id));

        return boardLists.sort(
            (prevList: IList, nextList: IList) =>
                board.sequenceLists.indexOf(prevList.id) - board.sequenceLists.indexOf(nextList.id)
        );
    }
);

export const selectTaskLabels = createSelector(
    [selectAllLabel, (state, task: ITask) => task],
    (allLabels, task) => {
        return allLabels.filter((label) => task.labels.includes(label.id));
    }
);
