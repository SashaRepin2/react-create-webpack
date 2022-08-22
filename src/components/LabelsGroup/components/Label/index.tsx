import React from "react";

import { Box, Container, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { ILabel } from "../../../../interfaces/ILabel";

interface ILabelProps {
    label: ILabel;
    onDeleteHandler: (labelId: number) => void;
}

const Label: React.FC<ILabelProps> = ({ label, onDeleteHandler }) => {
    return (
        <Container
            className={"labels-group__label"}
            sx={{
                minWidth: "200px",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                bgcolor: "#8458b3",
                borderRadius: "7px",
                boxShadow: 2,
            }}
        >
            <Typography
                className={"labels-group__label-title"}
                variant={"subtitle1"}
                sx={{ margin: "0 5px", color: "#fff" }}
            >
                {label.title}
            </Typography>
            <Box
                className={"labels-group__label-color"}
                sx={{
                    height: "24px",
                    width: "24px",
                    bgcolor: label.hexColor,
                    borderRadius: "50%",
                    boxShadow: 3,
                }}
            />
            <IconButton
                className={"labels-group__label-delete"}
                onClick={() => {
                    onDeleteHandler(label.id);
                }}
                sx={{ color: "red" }}
            >
                <DeleteIcon />
            </IconButton>
        </Container>
    );
};

export default Label;
