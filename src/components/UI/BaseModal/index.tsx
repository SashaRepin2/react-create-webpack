import React from "react";

import { Divider, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ReactDOM from "react-dom";

import styles from "./BaseModal.module.scss";

interface IBaseModalProps {
    isShow: boolean;
    title: string;
    children: React.ReactNode;
    onClose: () => void;
}

const BaseModal: React.FC<IBaseModalProps> = ({ isShow, onClose, children, title }) => {
    return ReactDOM.createPortal(
        <Modal
            open={isShow}
            onClose={onClose}
        >
            <Box className={styles.body}>
                <Typography
                    className={styles.title}
                    variant={"h6"}
                >
                    {title}
                </Typography>
                <Divider className={styles.divider} />
                <Box className={styles.content}>{children}</Box>
            </Box>
        </Modal>,
        document.body
    );
};

export default React.memo(BaseModal);
