import React from "react";

import { Stack } from "@mui/material";

import Label from "./components/Item";

import useAppDispatch from "@hooks/useAppDispatch";
import useAppSelector from "@hooks/useAppSelector";

import { labelsDeleteLabelAction } from "@src/store/actions/labels";
import { LabelFormSlice } from "@store/reducers/labelForm";

import { ILabel } from "@interfaces/ILabel";
import { selectLabels } from "@store/selectors/labels";

const LabelsGroup: React.FC = () => {
    const dispatch = useAppDispatch();
    const { changeEditLabel } = LabelFormSlice.actions;

    const labels = useAppSelector(selectLabels);

    function onDeleteLabelHandler(labelId: number) {
        dispatch(labelsDeleteLabelAction(labelId));
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
                    onDelete={onDeleteLabelHandler}
                    onEdit={onEditLabelHandler}
                />
            ))}
        </Stack>
    );
};

export default LabelsGroup;
