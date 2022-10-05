import React, { FC } from "react";

import { Box, Tooltip } from "@mui/material";

import { ILabel } from "@interfaces/ILabel";

interface ILabelsGroupLabelProps {
    label: ILabel;
}

const LabelsGroupLabel: FC<ILabelsGroupLabelProps> = ({ label }) => {
    return (
        <Tooltip
            title={label.title}
            arrow
        >
            <Box
                sx={{
                    margin: "3px",
                    height: "16px",
                    width: "16px",
                    cursor: "default",
                    borderRadius: "50%",
                    bgcolor: label.hexColor,
                    boxShadow: 3,
                }}
            />
        </Tooltip>
    );
};

export default LabelsGroupLabel;
