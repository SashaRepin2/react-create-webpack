import React, { memo } from "react";

import { Box } from "@mui/material";
import Button from "@mui/material/Button";

import BaseModal from "@components/UI/BaseModal";

import "./AlertDialog.scss";

interface IAlertDialogProps {
    isOpen: boolean;
    title: string;
    description: string;
    submitTextBtn?: string;
    closeTextBtn?: string;
    onClose: () => void;
    onSubmit: () => void;
}

const AlertDialog: React.FC<IAlertDialogProps> = ({
    isOpen,
    title,
    description,
    submitTextBtn,
    closeTextBtn,
    onClose,
    onSubmit,
}) => {
    return (
        <BaseModal
            isOpen={isOpen}
            title={title}
            onClose={onClose}
        >
            <Box className={"alert-dialog"}>
                <Box className={"alert-dialog__text"}>{description}</Box>
                <Box className={"alert-dialog__controls"}>
                    <Button
                        className={"alert-dialog__controls-button"}
                        variant={"contained"}
                        onClick={onClose}
                    >
                        {closeTextBtn || "Отмена"}
                    </Button>
                    <Button
                        className={"alert-dialog__controls-button"}
                        variant={"contained"}
                        onClick={onSubmit}
                    >
                        {submitTextBtn || "Принять"}
                    </Button>
                </Box>
            </Box>
        </BaseModal>
    );
};

export default memo(AlertDialog);
