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
    console.log(board);

    const onDragEndHandler = useCallback(
        (result: DropResult) => {
            const { source, destination, type } = result;

            // dropped outside
            if (!destination) {
                return;
            }

            const oldIndex = source.index;
            const newIndex = destination.index;

            const fromListId = +source.droppableId;
            const toListId = +destination.droppableId;

            if (newIndex === oldIndex && fromListId === toListId) return;

            if (type === DND_TYPES_TASKS) {
                // const lists = moveTask(lists, fromListId, toListId, oldIndex, newIndex);

                dispatch(
                    listsMoveTaskAction({
                        oldIndex,
                        newIndex,
                        fromListId,
                        toListId,
                    }),
                );
            }

            if (type === DND_TYPES_LISTS) {
                const sequenceLists = moveList(board, oldIndex, newIndex);

                dispatch(
                    boardsMoveListAction({
                        board,
                        sequenceLists,
                    }),
                );
            }
        },
        [board, lists],
    );

    function moveList(board: IBoard, oldIndex: number, newIndex: number): number[] {
        const sequenceLists = [...board.sequenceLists];
        const [movingList] = sequenceLists.splice(oldIndex, 1);
        sequenceLists.splice(newIndex, 0, movingList);
        return sequenceLists;
    }

    // function moveTask(
    //     lists: IList[],
    //     fromListId: number,
    //     toListId: number,
    //     oldIndex: number,
    //     newIndex: number,
    // ) {
    //     const fromList = lists.find((list) => list.id === fromListId);
    //     const toList = lists.find((list) => list.id === toListId)!;

    //     if (!fromList || !toList) return null;

    //     if (fromListId === toListId) {
    //         const sequenceTasks =
    //     }
    // }

    return {
        onDragEndHandler,
    };
}

export default useListsGroupMove;
