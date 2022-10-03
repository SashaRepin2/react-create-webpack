import React, { FC } from "react";

import { Stack } from "@mui/material";

import Label from "./components/Item";

import useAppDispatch from "@hooks/useAppDispatch";
import useAppSelector from "@hooks/useAppSelector";

import { labelsDeleteLabelAction } from "@src/store/actions/labels";
import labelsSelector from "@store/selectors/labels";

import { ILabel } from "@interfaces/ILabel";

interface ILabelGroupProps {
    onEditLabel: (editLabel: ILabel) => void;
}

const LabelsGroup: FC<ILabelGroupProps> = ({ onEditLabel }) => {
    const dispatch = useAppDispatch();
    const labels = useAppSelector(labelsSelector.selectLabels);

    function onDeleteLabelHandler(labelId: number) {
        dispatch(labelsDeleteLabelAction(labelId));
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
                    onEdit={onEditLabel}
                />
            ))}
        </Stack>
    );
};

export default LabelsGroup;
