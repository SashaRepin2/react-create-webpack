import { PayloadAction, createReducer } from "@reduxjs/toolkit";

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
    builder.addCase(labelsAddLabelAction, (state, action: PayloadAction<ILabel>) => {
        state.labels.push(action.payload);
    });

    builder.addCase(labelsEditLabelAction, (state, action: PayloadAction<ILabel>) => {
        const newLabel = action.payload;
        const label = state.labels.find((label) => label.id === newLabel.id);

        if (label) {
            label.hexColor = newLabel.hexColor;
            label.title = newLabel.title;
        }
    });

    builder.addCase(labelsDeleteLabelAction, (state, action: PayloadAction<number>) => {
        state.labels = state.labels.filter((label) => action.payload !== label.id);
    });

    builder.addCase(labelsDeleteLabelsAction, (state) => {
        state.labels = [];
    });
});

export default labelReducer;
