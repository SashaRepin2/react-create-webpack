import React, { memo } from "react";

import { Stack } from "@mui/material";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import ListsGroupList from "./components/List";

import useListsGroupMove from "./hooks/useListsGroupMove";
import useAppDispatch from "@hooks/useAppDispatch";
import useAppSelector from "@hooks/useAppSelector";

import { DND_TYPES_LISTS } from "@consts/dndTypes";

import { boardsDeleteBoardListAction } from "@src/store/actions/boards";
import { listsDeleteListAction } from "@src/store/actions/lists";
import { tasksDeleteListTasksAction } from "@src/store/actions/tasks";
import { selectBoardSortedLists } from "@store/selectors";

import { IBoard } from "@interfaces/IBoard";
import { IList } from "@src/interfaces/IList";

interface IListsGroupProps {
    board: IBoard;
    isOnlyView?: boolean;
}

const ListsGroup: React.FC<IListsGroupProps> = ({ board, isOnlyView = false }) => {
    const dispatch = useAppDispatch();
    const { onDragEndHandler } = useListsGroupMove(board);

    const lists = useAppSelector((state) => selectBoardSortedLists(state, board));

    function onDeleteListHandler(list: IList) {
        dispatch(
            boardsDeleteBoardListAction({
                boardId: board.id,
                listId: list.id,
            }),
        );
        dispatch(tasksDeleteListTasksAction(list.sequenceTasks));
        dispatch(listsDeleteListAction(list.id));
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

export default memo(ListsGroup);
