import React from "react";
import { Stack, Typography } from "@mui/material";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import List from "../List/List";

import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";

import { IBoard } from "../../../interfaces/IBoard";
import { IList } from "../../../interfaces/IList";
import { ListSlice } from "../../../store/reducers/ListSlice";
import { BoardSlice } from "../../../store/reducers/BoardSlice";

interface IListsGroup {
    board: IBoard;
}

const ListsGroup: React.FC<IListsGroup> = ({ board }) => {
    const dispatch = useAppDispatch();
    const { moveTask } = ListSlice.actions;
    const { moveList } = BoardSlice.actions;
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
                console.log(fromListId, " ", toListId);
                console.log(oldIndex, " ", newIndex);
                dispatch(moveTask({ oldIndex, newIndex, fromListId, toListId }));
            }
        }

        if (type === "LISTS") {
            dispatch(moveList({ oldIndex, newIndex, boardId: board.id }));
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEndHandler}>
            <Droppable droppableId={board.id.toString()} type={"LISTS"} direction={"horizontal"}>
                {(provided) => (
                    <Stack
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="asd"
                        direction={"row"}
                        justifyContent={"flex-start"}
                        alignItems={"stretch"}
                        spacing={2}
                        sx={{
                            margin: "15px 0",
                            width: "100%",
                            minHeight: "300px",
                            overflowX: "auto",
                            paddingBottom: "15px",
                        }}
                    >
                        {lists.length ? (
                            lists.map((list, index) => (
                                <List index={index} list={list} key={list.id} />
                            ))
                        ) : (
                            <Typography
                                variant={"h5"}
                                sx={{
                                    color: "#fff",
                                    margin: "0 auto",
                                }}
                            >
                                Добавьте список
                            </Typography>
                        )}
                    </Stack>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default React.memo(ListsGroup);
