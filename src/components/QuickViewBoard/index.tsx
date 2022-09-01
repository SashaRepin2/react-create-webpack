import React from "react";

import { Box } from "@mui/material";

import { IBoard } from "../../interfaces/IBoard";

import ListsGroup from "../ListsGroup";
import BaseModal from "../UI/BaseModal";

interface IQuickViewBoardProps {
    board: IBoard;
    isOpen: boolean;
    onClose: () => void;
}

const QuickViewBoard: React.FC<IQuickViewBoardProps> = ({ board, isOpen, onClose }) => {
    return (
        <BaseModal
            isOpen={isOpen}
            title={"Быстрый просмотр"}
            onClose={onClose}
        >
            <Box sx={{ margin: "5px 10px" }}>
                <ListsGroup
                    board={board}
                    isOnlyView={true}
                />
            </Box>
        </BaseModal>
    );
};

export default React.memo(QuickViewBoard);
