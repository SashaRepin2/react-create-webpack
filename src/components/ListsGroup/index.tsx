import React from "react";

import { Stack } from "@mui/material";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";

import ListsGroupList from "./components/List";

import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import useListsGroupMoveList from "./hooks/useListsGroupMoveList";

import { DND_TYPES_LISTS, DND_TYPES_TASKS } from "../../consts/dndTypes";

import { BoardSlice } from "../../store/reducers/BoardSlice";
import { ListSlice } from "../../store/reducers/ListSlice";
import { TaskSlice } from "../../store/reducers/TaskSlice";
import { selectBoardSortedLists } from "../../store/selectors";

import { IBoard } from "../../interfaces/IBoard";
import { IList } from "../../interfaces/IList";

interface IListsGroupProps {
    board: IBoard;
    isOnlyView?: boolean;
}

const ListsGroup: React.FC<IListsGroupProps> = ({ board, isOnlyView = false }) => {
    const dispatch = useAppDispatch();
    const { moveList } = useListsGroupMoveList(board);
    const { deleteListTasks } = TaskSlice.actions;
    const { moveTask, deleteList } = ListSlice.actions;
    const { deleteListFromBoard } = BoardSlice.actions;
    const lists = useAppSelector((state) => selectBoardSortedLists(state, board));

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
            moveList(oldIndex, newIndex);
        }
    }

    function onDeleteListHandler(list: IList) {
        dispatch(deleteListFromBoard({ boardId: board.id, listId: list.id }));
        dispatch(deleteListTasks(list.sequenceTasks));
        dispatch(deleteList(list.id));
    }

    return (
        <DragDropContext onDragEnd={onDragEndHandler}>
            <Droppable
                type={DND_TYPES_LISTS}
                direction={"horizontal"}
                droppableId={board.id.toString()}
            >
                {(provided) => (
                    <Stack
                        direction={"row"}
                        justifyContent={"flex-start"}
                        spacing={2}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        sx={{
                            width: "100%",
                            minHeight: "500px",
                            overflowX: "auto",
                            paddingBottom: "15px",
                        }}
                    >
                        {lists &&
                            lists.map((list, index) => (
                                <ListsGroupList
                                    index={index}
                                    list={list}
                                    key={list.id}
                                    isOnlyView={isOnlyView}
                                    onDelete={onDeleteListHandler}
                                />
                            ))}
                        {provided.placeholder}
                    </Stack>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default React.memo(ListsGroup);
