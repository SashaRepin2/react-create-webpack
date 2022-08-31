import React from "react";

import useAppDispatch from "../../hooks/useAppDispatch";

import { IBoard } from "../../interfaces/IBoard";

import ListsGroup from "../ListsGroup";
import BaseModal from "../UI/BaseModal";

interface IQuickViewBoardProps {
    board: IBoard;
    isOpen: boolean;
    onClose: () => void;
}

const QuickViewBoard: React.FC<IQuickViewBoardProps> = ({ board, isOpen, onClose }) => {
    const dispatch = useAppDispatch();

    return (
        <BaseModal
            isOpen={isOpen}
            title={"Быстрый просмотр"}
            onClose={onClose}
        >
            <ListsGroup board={board} />
        </BaseModal>
    );
};

export default React.memo(QuickViewBoard);
