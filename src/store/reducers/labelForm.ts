import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ILabel } from "@interfaces/ILabel";
import ILabelForm from "@interfaces/ILabelForm";

interface ILabelFormState {
    editLabel: ILabel | null;
    fieldsValues: ILabelForm;
}

const initialState: ILabelFormState = {
    editLabel: null,
    fieldsValues: {
        title: "",
        hexColor: "#fff",
    },
};

export const LabelFormSlice = createSlice({
    name: "label-form",
    initialState,
    reducers: {
        changeEditLabel(state, action: PayloadAction<ILabel | null>) {
            const label = action.payload;

            state.editLabel = label;

            if (label) {
                state.fieldsValues.title = label.title;
                state.fieldsValues.hexColor = label.hexColor;
            }
        },
        changeFields(state, action: PayloadAction<ILabelForm>) {
            state.fieldsValues = Object.assign(state.fieldsValues, action.payload);
        },
        changeTitle(state, action: PayloadAction<string>) {
            state.fieldsValues.title = action.payload;
        },
        changeHexColor(state, action: PayloadAction<string>) {
            state.fieldsValues.hexColor = action.payload;
        },
        resetForm(state) {
            state.fieldsValues = {
                title: "",
                hexColor: "#fff",
            };
            state.editLabel = null;
        },
    },
});

export default LabelFormSlice.reducer;
