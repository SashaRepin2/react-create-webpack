import * as React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ReactDOM from "react-dom";

import styles from "./AlertDialog.module.scss";

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
    return ReactDOM.createPortal(
        <Dialog
            open={isOpen}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>{closeTextBtn ? closeTextBtn : "Закрыть"} </Button>
                <Button onClick={onSubmit}>{submitTextBtn ? submitTextBtn : "Принять"}</Button>
            </DialogActions>
        </Dialog>,
        document.body
    );
};

export default React.memo(AlertDialog);
