import { PayloadAction, createReducer } from "@reduxjs/toolkit";

import { IList } from "@interfaces/IList";

import {
    listsAddListAction,
    listsAddListTaskAction,
    listsDeleteBoardListsAction,
    listsDeleteListAction,
    listsDeleteListTaskAction,
    listsMoveTaskAction,
    listsUpdateListAction,
} from "../actions/lists";

interface IListState {
    lists: IList[];
}

const initialState: IListState = {
    lists: [],
};

const listsReducer = createReducer(initialState, (builder) => {
    builder.addCase(listsAddListAction, (state, action: PayloadAction<IList>) => {
        state.lists.push(action.payload);
    });

    builder.addCase(
        listsUpdateListAction,
        (
            state,
            action: PayloadAction<{
                idList: number;
                newTitle: string;
            }>,
        ) => {
            const { idList, newTitle } = action.payload;
            const list = state.lists.find((list) => list.id === idList);

            if (list) {
                list.title = newTitle;
            }
        },
    );

    builder.addCase(listsDeleteListAction, (state, action: PayloadAction<number>) => {
        state.lists = state.lists.filter((item) => item.id !== action.payload);
    });

    builder.addCase(
        listsAddListTaskAction,
        (
            state,
            action: PayloadAction<{
                listId: number;
                taskId: number;
            }>,
        ) => {
            const { listId, taskId } = action.payload;
            const list = state.lists.find((list) => list.id === listId);

            if (list) {
                list.sequenceTasks.push(taskId);
            }
        },
    );

    builder.addCase(
        listsMoveTaskAction,
        (
            state,
            action: PayloadAction<{
                oldIndex: number;
                newIndex: number;
                fromListId: number;
                toListId: number;
            }>,
        ) => {
            const { oldIndex, newIndex, fromListId, toListId } = action.payload;

            if (fromListId === toListId) {
                const fromList = state.lists.find((list) => list.id === fromListId);
                if (fromList) {
                    const [movingCard] = fromList.sequenceTasks.splice(oldIndex, 1);
                    fromList.sequenceTasks.splice(newIndex, 0, movingCard);
                }
            } else {
                const fromList = state.lists.find((list) => list.id === fromListId);
                const toList = state.lists.find((list) => list.id === toListId);

                if (fromList && toList) {
                    const [movingCard] = fromList.sequenceTasks.splice(oldIndex, 1);
                    toList.sequenceTasks.splice(newIndex, 0, movingCard);
                }
            }
        },
    );

    builder.addCase(
        listsDeleteListTaskAction,
        (
            state,
            action: PayloadAction<{
                listId: number;
                taskId: number;
            }>,
        ) => {
            const { listId, taskId } = action.payload;
            const list = state.lists.find((list) => list.id === listId);

            if (list) {
                list.sequenceTasks = list.sequenceTasks.filter((id) => id === taskId);
            }
        },
    );

    builder.addCase(listsDeleteBoardListsAction, (state, action: PayloadAction<number[]>) => {
        state.lists = state.lists.filter((list) => action.payload.includes(list.id));
    });
});

export default listsReducer;
