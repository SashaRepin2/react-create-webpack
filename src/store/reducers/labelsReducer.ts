import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ILabel } from "../../interfaces/ILabel";

interface ILabelState {
    labels: ILabel[];
}

const initialState: ILabelState = {
    labels: [],
};

export const LabelSlice = createSlice({
    name: "labels",
    initialState,
    reducers: {
        addLabel(state, action: PayloadAction<ILabel>) {
            state.labels.push(action.payload);
        },
        editLabel(state, action: PayloadAction<ILabel>) {
            const newLabel = action.payload;
            const label = state.labels.find((label) => label.id === newLabel.id);

            if (label) {
                label.hexColor = newLabel.hexColor;
                label.title = newLabel.title;
            }
        },
        deleteLabel(state, action: PayloadAction<number>) {
            state.labels = state.labels.filter((label) => action.payload !== label.id);
        },
        deleteLabels(state) {
            state.labels = [];
        },
    },
});

export default LabelSlice.reducer;
