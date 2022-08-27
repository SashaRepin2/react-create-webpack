import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Container, IconButton, Typography } from "@mui/material";

import { ILabel } from "../../../../interfaces/ILabel";

interface ILabelsGroupItemProps {
    label: ILabel;
    onDelete: (labelId: number) => void;
    onEdit: (labelId: number) => void;
}

const LabelsGroupItem: React.FC<ILabelsGroupItemProps> = ({ label, onDelete, onEdit }) => {
    return (
        <React.Fragment>
            <Container
                className={"labels-group-label"}
                sx={{
                    minWidth: "200px",
                    padding: "5px",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr) min-content",
                    alignItems: "center",
                    bgcolor: "#8458b3",
                    borderRadius: "7px",
                    boxShadow: 2,
                }}
            >
                <Typography
                    className={"labels-group__label-title"}
                    variant={"subtitle1"}
                    sx={{
                        color: "#fff",
                    }}
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
                <Box
                    className={"labels-group__label-settings"}
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}
                >
                    {/* <IconButton
                        className={"labels-group__label-delete"}
                        onClick={() => onEdit(label)}
                        sx={{
                            color: "#ffff00",
                        }}
                    >
                        <EditIcon />
                    </IconButton> */}
                    <IconButton
                        className={"labels-group__label-delete"}
                        onClick={() => onDelete(label.id)}
                        sx={{
                            color: "#f00",
                        }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default React.memo(LabelsGroupItem);
