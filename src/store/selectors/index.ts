import { createSelector } from "@reduxjs/toolkit";

import boardsSelector from "@store/selectors/boards";
import labelsSelector, { selectLabels } from "@store/selectors/labels";
import listsSelector, { selectLists } from "@store/selectors/lists";
import tasksSelector, { selectTasks } from "@store/selectors/tasks";

import { IBoard } from "@interfaces/IBoard";
import { ITask } from "@interfaces/ITask";
import { IList } from "@src/interfaces/ILists";

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

export const selectListSortedTasks = createSelector(
    [selectTasks, (state, list: IList) => list],
    (allTasks, list) => {
        const listTasks = allTasks.filter((task) => list.sequenceTasks.includes(task.id));

        return listTasks.sort(
            (prevTask: ITask, nextTask: ITask) =>
                list.sequenceTasks.indexOf(prevTask.id) - list.sequenceTasks.indexOf(nextTask.id),
        );
    },
);

export const selectTaskLabels = createSelector(
    [selectLabels, (state, task: ITask) => task],
    (allLabels, task) => {
        return allLabels.filter((label) => task.labels.includes(label.id));
    },
);

export const selectNotTaskLabels = createSelector(
    [selectLabels, (state, task: ITask) => task],
    (allLabels, task) => {
        return allLabels.filter((label) => !task.labels.includes(label.id));
    },
);

const rootSelector = {
    selectBoardSortedLists,
    selectListSortedTasks,
    selectTaskLabels,
    selectNotTaskLabels,
    ...tasksSelector,
    ...boardsSelector,
    ...labelsSelector,
    ...listsSelector,
};

export default rootSelector;
