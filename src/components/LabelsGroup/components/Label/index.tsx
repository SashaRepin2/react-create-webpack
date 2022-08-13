import { Box, Container, Typography } from "@mui/material";
import React from "react";
import useAppDispatch from "../../../../hooks/useAppDispatch";
import { ILabel } from "../../../../interfaces/ILabel";
import { LabelSlice } from "../../../../store/reducers/LabelSlice";

interface ILabelProps {
    label: ILabel;
}

const Label: React.FC<ILabelProps> = ({ label }) => {
    const dipatch = useAppDispatch();
    const { deleteLabel } = LabelSlice.actions;

    function onDeleteHandler() {
        dipatch(deleteLabel(label.id));
    }

    return (
        <Container
            className={"labels-group__label"}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                padding: "10px",
                bgcolor: "#8458b3",
                borderRadius: "7px",
            }}
        >
            <Typography>{label.title}</Typography>
            <Box
                sx={{
                    height: "24px",
                    width: "24px",
                    bgcolor: label.hexColor,
                    borderRadius: "50%",
                    boxShadow: 3,
                }}
            />
            <Box>
                <button onClick={onDeleteHandler}>Delete</button>
            </Box>
        </Container>
    );
};

export default Label;
