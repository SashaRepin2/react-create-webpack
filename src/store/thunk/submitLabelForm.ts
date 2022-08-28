import { ILabel } from "../../interfaces/ILabel";

import { AppDispatch, RootState } from "..";
import { LabelFormSlice } from "../reducers/LabelFormSlice";
import { LabelSlice } from "../reducers/LabelSlice";

export default function submitLabelForm() {
    return (dispatch: AppDispatch, getState: RootState) => {
        const editLabel = getState.labelFormReducer.editLabel;
        const formFields = getState.labelFormReducer.fieldsValues;
        let addLabel: ILabel;

        if (editLabel) {
            addLabel = Object.assign({}, editLabel, formFields);
            dispatch(LabelFormSlice.actions.changeEditLabel(null));
            dispatch(LabelSlice.actions.editLabel(addLabel));
        } else {
            addLabel = Object.assign({ id: Date.now() }, formFields);
            dispatch(LabelSlice.actions.addLabel(addLabel));
        }

        dispatch(LabelFormSlice.actions.resetForm());
    };
}
