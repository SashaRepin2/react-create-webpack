import React from "react";

import { Box } from "@mui/system";
import ReactDOM from "react-dom";

import getScrollbarWidth from "../../../utils/getScrollbarWidth";

import "./BaseModal.scss";

interface IBaseModalProps {
    isOpen: boolean;
    title?: string;
    children: React.ReactNode;
    onClose: () => void;
}

const BaseModal: React.FC<IBaseModalProps> = ({ isOpen, title, onClose, children }) => {
    const modalRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        const onClickOutsideModal = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener("click", onClickOutsideModal, true);

        return () => {
            document.removeEventListener("click", onClickOutsideModal, true);
        };
    }, []);

    React.useEffect(() => {
        document.body.style.paddingRight = isOpen ? getScrollbarWidth() + "px" : "";
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.paddingRight = "";
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return ReactDOM.createPortal(
        isOpen && (
            <Box className={"modal"}>
                <Box
                    className={"modal__body"}
                    onClick={(e) => e.stopPropagation()}
                    ref={modalRef}
                >
                    {title && <Box className={"modal__body-title"}>{title}</Box>}
                    <Box className={"modal__body-content"}>{children}</Box>
                </Box>
            </Box>
        ),
        document.body
    );
};

export default React.memo(BaseModal);
