import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@store/store";

import { IBoard } from "@interfaces/IBoard";
import { ILabel } from "@interfaces/ILabel";
import { IList } from "@interfaces/IList";
import { ITask } from "@interfaces/ITask";

export const selectAllLists = (state: RootState): IList[] => state.listsReducer.lists;
export const selectAllBoards = (state: RootState): IBoard[] => state.boardsReducer.boards;
export const selectAllLabel = (state: RootState): ILabel[] => state.labelsReducer.labels;

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
