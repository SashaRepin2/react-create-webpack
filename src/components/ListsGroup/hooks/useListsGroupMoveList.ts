import useAppDispatch from "../../../hooks/useAppDispatch";

import { BoardSlice } from "../../../store/reducers/BoardSlice";

import { IBoard } from "../../../interfaces/IBoard";

function useListsGroupMoveList(board: IBoard) {
    const dispatch = useAppDispatch();
    const { boardMoveList } = BoardSlice.actions;

    function moveList(oldIndex: number, newIndex: number) {
        if (board) {
            const [movingList] = board.sequenceLists.splice(oldIndex, 1);
            board.sequenceLists.splice(newIndex, 0, movingList);

            dispatch(boardMoveList(board));
        }
    }

    return { moveList };
}

export default useListsGroupMoveList;
