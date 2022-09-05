import React from "react";

import { Stack } from "@mui/material";

import Label from "./components/Item";

import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";

import { LabelFormSlice } from "../../store/reducers/labelFormReducer";
import { LabelSlice } from "../../store/reducers/labelsReducer";

import { ILabel } from "../../interfaces/ILabel";

const LabelsGroup: React.FC = () => {
    const dispatch = useAppDispatch();
    const { deleteLabel } = LabelSlice.actions;
    const { changeEditLabel } = LabelFormSlice.actions;

    const labels = useAppSelector((state) => state.labelsReducer.labels);

    function onDeleteLabelHanlder(labelId: number) {
        dispatch(deleteLabel(labelId));
    }

    function onEditLabelHandler(label: ILabel) {
        dispatch(changeEditLabel(label));
    }

    return (
        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={2}
            sx={{
                minWidth: "300px",
                padding: "10px",
                bgcolor: "purple",
                borderRadius: "5px",
                boxShadow: 1,
            }}
        >
            {labels.map((label) => (
                <Label
                    key={label.id}
                    label={label}
                    onDelete={onDeleteLabelHanlder}
                    onEdit={onEditLabelHandler}
                />
            ))}
        </Stack>
    );
};

export default LabelsGroup;
