import { createReducer } from "@reduxjs/toolkit";

import { ILabel } from "@interfaces/ILabel";

import {
    labelsAddLabelAction,
    labelsDeleteLabelAction,
    labelsDeleteLabelsAction,
    labelsEditLabelAction,
} from "../actions/labels";

interface ILabelState {
    labels: ILabel[];
}

const initialState: ILabelState = {
    labels: [],
};

export const labelReducer = createReducer(initialState, (builder) => {
    builder.addCase(labelsAddLabelAction, (state, action) => {
        return {
            ...state,
            labels: [...state.labels, action.payload],
        };
    });

    builder.addCase(labelsDeleteLabelAction, (state, action) => {
        return {
            ...state,
            labels: state.labels.filter((label) => action.payload !== label.id),
        };
    });

    builder.addCase(labelsDeleteLabelsAction, (state) => {
        return {
            ...state,
            labels: [],
        };
    });

    builder.addCase(labelsEditLabelAction, (state, action) => {
        const editableLabel = action.payload;

        return {
            ...state,
            labels: state.labels.map((_label) =>
                _label.id === editableLabel.id ? editableLabel : _label,
            ),
        };
    });
});

export default labelReducer;
