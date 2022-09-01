import React from "react";

import { Box } from "@mui/material";

import LabelsGroupLabel from "./components/Label";

import { ILabel } from "../../../../interfaces/ILabel";

interface ILabelsGroupProps {
    labels: ILabel[];
}

const TaskLabelsGroup: React.FC<ILabelsGroupProps> = ({ labels }) => (
    <Box sx={{ display: "flex", flexWrap: "wrap", margin: "0 5px" }}>
        {labels.map((label) => (
            <LabelsGroupLabel
                key={label.id}
                label={label}
            />
        ))}
    </Box>
);

export default TaskLabelsGroup;
