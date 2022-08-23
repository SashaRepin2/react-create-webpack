import React from "react";

import { Tooltip } from "@mui/material";
import { Box } from "@mui/system";

import { ILabel } from "../../../../interfaces/ILabel";

interface ITaskLabelProps {
    label: ILabel;
}

const TaskLabel: React.FC<ITaskLabelProps> = ({ label }) => {
    return (
        <Tooltip
            title={label.title}
            arrow
        >
            <Box
                sx={{
                    height: "16px",
                    width: "16px",
                    cursor: "default",
                    borderRadius: "50%",
                    bgcolor: label.hexColor,
                    margin: "3px",
                }}
            />
        </Tooltip>
    );
};

export default TaskLabel;
