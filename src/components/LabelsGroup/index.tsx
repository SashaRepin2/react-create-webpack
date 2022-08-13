import { Stack } from "@mui/material";
import React from "react";
import useAppSelector from "../../hooks/useAppSelector";
import Label from "./components/Label";

const LabelsGroup: React.FC = () => {
    const labels = useAppSelector((state) => state.labelReducer.labels);

    return (
        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={2}
            sx={{ padding: "5px", bgcolor: "purple", borderRadius: "5px" }}
        >
            {labels.map((label) => (
                <Label
                    key={label.id}
                    label={label}
                />
            ))}
        </Stack>
    );
};

export default LabelsGroup;
