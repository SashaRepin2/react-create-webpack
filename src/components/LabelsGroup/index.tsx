import React from "react";

import { Stack } from "@mui/material";

import Label from "./components/Item";

import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";

import { LabelSlice } from "../../store/reducers/LabelSlice";

import { ILabel } from "../../interfaces/ILabel";

interface ILabelsGroupProps {
    onEditLabel: (lable: ILabel) => void;
}

const LabelsGroup: React.FC<ILabelsGroupProps> = ({ onEditLabel }) => {
    const dispatch = useAppDispatch();
    const { deleteLabel } = LabelSlice.actions;

    const labels = useAppSelector((state) => state.labelReducer.labels);

    const onDeleteLabelHanlder = (labelId: number) => {
        dispatch(deleteLabel(labelId));
    };

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
                    onEdit={(listId) => {
                        console.log(listId);
                    }}
                />
            ))}
        </Stack>
    );
};

export default LabelsGroup;
