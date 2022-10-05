import { useCallback } from "react";

import { DropResult } from "react-beautiful-dnd";

import useAppDispatch from "@hooks/useAppDispatch";

import { DND_TYPES_LISTS, DND_TYPES_TASKS } from "@consts/dndTypes";

import { boardsMoveListAction } from "@src/store/actions/boards";
import { listsMoveTaskAction } from "@src/store/actions/lists";

import { IBoard } from "@interfaces/IBoard";
import { IList } from "@src/interfaces/IList";

function useListsGroupMove(board: IBoard, lists: IList[]) {
    const dispatch = useAppDispatch();

    const onDragEndHandler = useCallback((result: DropResult) => {
        const { source, destination, type } = result;

        // dropped outside
        if (!destination) {
            return;
        }

        const oldIndex = source.index;
        const newIndex = destination.index;
        const fromListId = +source.droppableId;
        const toListId = +destination.droppableId;

        const fromList = lists.find((list) => list.id === fromListId);
        const toList = lists.find((list) => list.id === toListId);

        if (!fromList || !toList) return;

        if (type === DND_TYPES_TASKS) {
            // 1: Перемещение внутри одного списка, но новая позиция
            // 2: Перемещение в другой список
            if (newIndex !== oldIndex) {
                dispatch(
                    listsMoveTaskAction({
                        oldIndex,
                        newIndex,
                        fromList,
                        toList,
                    }),
                );
            }
        }

        if (type === DND_TYPES_LISTS) {
            dispatch(
                boardsMoveListAction({
                    oldIndex,
                    newIndex,
                    board,
                }),
            );
        }
    }, []);

    return {
        onDragEndHandler,
    };
}

export default useListsGroupMove;
