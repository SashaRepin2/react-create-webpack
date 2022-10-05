import { createReducer } from "@reduxjs/toolkit";

import { IList } from "@src/interfaces/IList";

import {
    listsAddListAction,
    listsAddListTaskAction,
    listsDeleteBoardListsAction,
    listsDeleteListAction,
    listsDeleteListTaskAction,
    listsMoveTaskAction,
} from "../actions/lists";

interface IListState {
    lists: IList[];
}

const initialState: IListState = {
    lists: [],
};

const listsReducer = createReducer(initialState, (builder) => {
    builder.addCase(listsAddListAction, (state, action) => {
        return {
            ...state,
            lists: [...state.lists, action.payload],
        };
    });

    builder.addCase(listsDeleteListAction, (state, action) => {
        return {
            ...state,
            lists: state.lists.filter((item) => item.id !== action.payload),
        };
    });

    builder.addCase(listsAddListTaskAction, (state, action) => {
        const { list, sequenceTasks } = action.payload;

        return {
            ...state,
            lists: state.lists.map((_list) =>
                _list.id === list.id
                    ? {
                          ..._list,
                          sequenceTasks,
                      }
                    : _list,
            ),
        };
    });

    builder.addCase(listsDeleteListTaskAction, (state, action) => {
        const { list, sequenceTasks } = action.payload;

        return {
            ...state,
            lists: state.lists.map((_list) =>
                _list.id === list.id
                    ? {
                          ..._list,
                          sequenceTasks,
                      }
                    : _list,
            ),
        };
    });

    builder.addCase(listsMoveTaskAction, (state, action) => {
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
    });

    builder.addCase(listsDeleteBoardListsAction, (state, action) => {
        return {
            ...state,
            lists: state.lists.filter((list) => action.payload.includes(list.id)),
        };
    });
});

export default listsReducer;
