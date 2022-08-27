import * as React from "react";

import { Box } from "@mui/material";
import Button from "@mui/material/Button";

import "./AlertDialog.scss";

import BaseModal from "../BaseModal";

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

export default React.memo(AlertDialog);
