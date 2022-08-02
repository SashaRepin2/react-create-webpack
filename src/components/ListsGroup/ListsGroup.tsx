import React from "react";
import { Stack } from "@mui/material";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import List from "./List/List";

import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";

import { IBoard } from "../../interfaces/IBoard";
import { IList } from "../../interfaces/IList";
import { ListSlice } from "../../store/reducers/ListSlice";
import { BoardSlice } from "../../store/reducers/BoardSlice";
import { TaskSlice } from "../../store/reducers/TaskSlice";

interface IListsGroup {
    board: IBoard;
}

const ListsGroup: React.FC<IListsGroup> = ({ board }) => {
    const dispatch = useAppDispatch();
    const { deleteListTasks } = TaskSlice.actions;
    const { moveTask, deleteList } = ListSlice.actions;
    const { moveList, deleteListFromBoard } = BoardSlice.actions;
    const lists = useAppSelector((state) => {
        const boardLists = state.listReducer.lists.filter((list) =>
            board.sequenceLists.includes(list.id)
        );

        return boardLists.sort(
            (prevList: IList, nextList: IList) =>
                board.sequenceLists.indexOf(prevList.id) - board.sequenceLists.indexOf(nextList.id)
        );
    });

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

        if (type === "TASKS") {
            if (newIndex !== oldIndex || fromListId !== toListId) {
                dispatch(moveTask({ oldIndex, newIndex, fromListId, toListId }));
            }
        }

        if (type === "LISTS") {
            dispatch(moveList({ oldIndex, newIndex, boardId: board.id }));
        }
    }

    function onDeleteListHandler(list: IList) {
        // ??????
        dispatch(deleteListFromBoard({ boardId: board.id, listId: list.id }));
        dispatch(deleteListTasks(list.sequenceTasks));
        dispatch(deleteList(list.id));
    }

    return (
        <DragDropContext onDragEnd={onDragEndHandler}>
            <Droppable droppableId={board.id.toString()} type={"LISTS"} direction={"horizontal"}>
                {(provided) => (
                    <Stack
                        direction={"row"}
                        justifyContent={"flex-start"}
                        spacing={2}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        sx={{
                            margin: "15px 0",
                            width: "100%",
                            minHeight: "500px",
                            overflowX: "auto",
                            paddingBottom: "15px",
                        }}
                    >
                        {lists &&
                            lists.map((list, index) => (
                                <List
                                    index={index}
                                    list={list}
                                    key={list.id}
                                    onDeleteHandler={onDeleteListHandler}
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