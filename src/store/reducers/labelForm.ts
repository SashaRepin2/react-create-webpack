import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ILabel } from "@interfaces/ILabel";

interface ILabelFormState {
    editLabel: ILabel | null;
}

const initialState: ILabelFormState = {
    editLabel: null,
};

export const LabelFormSlice = createSlice({
    name: "label-form",
    initialState,
    reducers: {
        updateEditLabel(state, action: PayloadAction<ILabel | null>) {
            state.editLabel = action.payload;
        },
    },
});

export default LabelFormSlice.reducer;
