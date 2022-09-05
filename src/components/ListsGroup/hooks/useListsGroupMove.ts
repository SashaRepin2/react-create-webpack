import { DropResult } from "react-beautiful-dnd";

import useAppDispatch from "../../../hooks/useAppDispatch";

import { DND_TYPES_LISTS, DND_TYPES_TASKS } from "../../../consts/dndTypes";

import { BoardSlice } from "../../../store/reducers/boardsReducer";
import { ListSlice } from "../../../store/reducers/listsReducer";

import { IBoard } from "../../../interfaces/IBoard";

function useListsGroupMove(board: IBoard) {
    const dispatch = useAppDispatch();
    const { moveTask } = ListSlice.actions;
    const { moveList } = BoardSlice.actions;

    function onDragEndHandler(result: DropResult) {
        const { source, destination, type } = result;

        // dropped outside
        if (!destination) {
            return;
        }

        const oldIndex = source.index;
        const newIndex = destination.index;
        const fromListId = +source.droppableId;
        const toListId = +destination.droppableId;

        if (type === DND_TYPES_TASKS) {
            if (newIndex !== oldIndex || fromListId !== toListId) {
                dispatch(moveTask({ oldIndex, newIndex, fromListId, toListId }));
            }
        }

        if (type === DND_TYPES_LISTS) {
            dispatch(moveList({ oldIndex, newIndex, boardId: board.id }));
        }
    }

    return { onDragEndHandler };
}

export default useListsGroupMove;
