import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IList } from "../../interfaces/IList";

interface IListState {
    lists: IList[];
}

const initialState: IListState = {
    lists: [],
};

export const ListSlice = createSlice({
    name: "lists",
    initialState,
    reducers: {
        addList(state, action: PayloadAction<IList>) {
            state.lists.push(action.payload);
        },
        updateListTitle(state, action: PayloadAction<{ idList: number; newTitle: string }>) {
            const { idList, newTitle } = action.payload;
            const list = state.lists.find((list) => list.id === idList);

            if (list) {
                list.title = newTitle;
            }
        },
        deleteList(state, action: PayloadAction<number>) {
            state.lists = state.lists.filter((item) => item.id !== action.payload);
        },
        deleteBoardLists(state, action: PayloadAction<number[]>) {
            state.lists = state.lists.filter((list) => action.payload.includes(list.id));
        },
        addListTask(state, action: PayloadAction<{ listId: number; taskId: number }>) {
            const { listId, taskId } = action.payload;
            const list = state.lists.find((list) => list.id === listId);

            if (list) {
                list.sequenceTasks.push(taskId);
            }
        },
        moveTask(
            state,
            action: PayloadAction<{
                oldIndex: number;
                newIndex: number;
                fromListId: number;
                toListId: number;
            }>
        ) {
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
        deleteTask(state, action: PayloadAction<{ listId: number; taskId: number }>) {
            const { listId, taskId } = action.payload;
            const list = state.lists.find((list) => list.id === listId);

            if (list) {
                list.sequenceTasks = list.sequenceTasks.filter((id) => id === taskId);
            }
        },
    },
});

export default ListSlice.reducer;
