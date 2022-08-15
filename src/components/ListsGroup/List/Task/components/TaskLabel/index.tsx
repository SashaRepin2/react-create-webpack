import { Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ILabel } from "../../../../../../interfaces/ILabel";

interface ITaskLabelProps {
    label: ILabel;
}

const TaskLabel: React.FC<ITaskLabelProps> = ({ label }) => {
    return (
        <Tooltip
            title={label.title}
            arrow
        >
            <Box sx={{ borderRadius: "50%", bgcolor: label.hexColor }}>Arrow</Box>
        </Tooltip>
    );
};

export default TaskLabel;
