import React from "react";

import useAppDispatch from "../../hooks/useAppDispatch";

import { IBoard } from "../../interfaces/IBoard";

import BaseModal from "../UI/BaseModal";

interface IQuickViewBoardProps {
    board: IBoard;
}

const QuickViewBoard: React.FC<IQuickViewBoardProps> = ({ board }) => {
    const dispatch = useAppDispatch();

    const [isShow, setIsShow] = React.useState<boolean>(false);

    function onCloseHandler() {
        setIsShow(false);
    }

    function onOpenHandler() {
        setIsShow(true);
    }

    return (
        <BaseModal
            isShow={isShow}
            title={"Быстрый просмотр"}
            onClose={onCloseHandler}
        >
            quick view
        </BaseModal>
    );
};

export default QuickViewBoard;
