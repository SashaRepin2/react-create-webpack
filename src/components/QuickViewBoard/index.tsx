import React, { FC, memo } from "react";

import { Box } from "@mui/material";

import ListsGroup from "../../components/ListsGroup";
import BaseModal from "@components/UI/BaseModal";

import { IBoard } from "@interfaces/IBoard";

interface IQuickViewBoardProps {
    board: IBoard;
    isOpen: boolean;
    onClose: () => void;
}

const QuickViewBoard: FC<IQuickViewBoardProps> = ({ board, isOpen, onClose }) => {
    return (
        <BaseModal
            isOpen={isOpen}
            title={"Быстрый просмотр"}
            onClose={onClose}
        >
            <Box
                sx={{
                    margin: "5px 10px",
                }}
            >
                <ListsGroup
                    board={board}
                    isOnlyView={true}
                />
            </Box>
        </BaseModal>
    );
};

export default memo(QuickViewBoard);
