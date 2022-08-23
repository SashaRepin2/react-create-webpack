import React from "react";

import { Modal } from "@mui/material";
import { Box } from "@mui/system";

interface IBaseModalProps {
    isShow: boolean;
    onCloseHandle: () => void;
    children: React.ReactNode;
}

const BaseModal: React.FC<IBaseModalProps> = ({ isShow, onCloseHandle, children }) => {
    return (
        <Modal
            open={isShow}
            onClose={onCloseHandle}
        >
            <Box
                sx={{
                    minWidth: "300px",
                    maxWidth: "500px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "5px",
                    bgcolor: "#1976d2",
                    boxShadow: 24,
                    padding: "10px",
                }}
            >
                {children}
            </Box>
        </Modal>
    );
};

export default React.memo(BaseModal);
