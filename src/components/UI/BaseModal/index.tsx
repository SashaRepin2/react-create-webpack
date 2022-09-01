import React, { useEffect } from "react";

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
    // const modalRef = useRef<HTMLElement>(null);

    // useEffect(() => {
    //     const onClickOutsideModal = (event: MouseEvent) => {
    //         console.log(event.target);

    //         if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
    //             onClose();
    //         }
    //     };

    //     document.addEventListener("click", onClickOutsideModal, true);

    //     return () => {
    //         document.removeEventListener("click", onClickOutsideModal, true);
    //     };
    // }, []);

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

    return ReactDOM.createPortal(
        isOpen && (
            <Box
                className={"modal"}
                onClick={onClose}
            >
                <Box
                    // ref={modalRef}
                    className={"modal__body"}
                    onClick={onClickInsideModal}
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
