import { createSelector } from "@reduxjs/toolkit";

import { selectLabels } from "@store/selectors/labels";
import { selectLists } from "@store/selectors/lists";

import { IBoard } from "@interfaces/IBoard";
import { IList } from "@interfaces/IList";
import { ITask } from "@interfaces/ITask";

export const selectBoardSortedLists = createSelector(
    [selectLists, (state, board: IBoard) => board],
    (allLists, board) => {
        const boardLists = allLists.filter((list) => board.sequenceLists.includes(list.id));

        return boardLists.sort(
            (prevList: IList, nextList: IList) =>
                board.sequenceLists.indexOf(prevList.id) - board.sequenceLists.indexOf(nextList.id),
        );
    },
);

export const selectTaskLabels = createSelector(
    [selectLabels, (state, task: ITask) => task],
    (allLabels, task) => {
        return allLabels.filter((label) => task.labels.includes(label.id));
    },
);
