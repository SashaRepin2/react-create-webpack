import React, { memo } from "react";

import { Box, Typography } from "@mui/material";

import { ILabel } from "@interfaces/ILabel";

interface IAddLabelListProps {
    title: string;
    labels: ILabel[];
    onClickLabelHandler: (label: ILabel) => void;
}

const AddLabelList: React.FC<IAddLabelListProps> = ({ title, labels, onClickLabelHandler }) => {
    return (
        <Box
            sx={{
                overflow: "hidden",
                bgcolor: "#D0BDF4",
                borderRadius: "5px",
                padding: "5px",
            }}
        >
            <Box
                sx={{
                    bgcolor: "#8458b3",
                    borderRadius: "5px",
                    padding: "5px",
                }}
            >
                <Typography
                    variant={"h6"}
                    sx={{
                        color: "#fff",
                        fontWeight: "bold",
                    }}
                >
                    {title}
                </Typography>
            </Box>
            <Box>
                {labels.map((label) => (
                    <Box
                        key={label.id}
                        onClick={() => onClickLabelHandler(label)}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            margin: "5px 2px",
                            padding: "5px 15px",
                            bgcolor: "#8458b3",
                            borderRadius: "5px",
                            color: "#fff",
                            cursor: "pointer",
                            boxShadow: 2,
                        }}
                    >
                        <Box
                            sx={{
                                height: "16px",
                                width: "16px",
                                cursor: "default",
                                borderRadius: "50%",
                                bgcolor: label.hexColor,
                                marginRight: "15px",
                            }}
                        />
                        <Typography
                            variant={"subtitle1"}
                            sx={{
                                color: "#fff",
                                fontWeight: "bold",
                            }}
                        >
                            {label.title}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default memo(AddLabelList);
