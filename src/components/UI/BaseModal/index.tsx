import React, { memo, useEffect } from "react";

import { Box } from "@mui/system";
import { createPortal } from "react-dom";

import getScrollbarWidth from "@utils/getScrollbarWidth";

import "./BaseModal.scss";

interface IBaseModalProps {
    isOpen: boolean;
    title?: string;
    children: React.ReactNode;
    onClose: () => void;
}

const BaseModal: React.FC<IBaseModalProps> = ({ isOpen, title, onClose, children }) => {
    function onClickInsideModal(event: React.MouseEvent<HTMLElement>) {
        event.stopPropagation();
    }

    useEffect(() => {
        document.body.style.paddingRight = isOpen ? getScrollbarWidth() + "px" : "";
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.paddingRight = "";
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return createPortal(
        isOpen && (
            <Box
                className={"modal"}
                onClick={onClose}
            >
                <Box
                    className={"modal__body"}
                    onClick={onClickInsideModal}
                >
                    {title && <Box className={"modal__body-title"}>{title}</Box>}
                    <Box className={"modal__body-content"}>{children}</Box>
                </Box>
            </Box>
        ),
        document.body,
    );
};

export default memo(BaseModal);
