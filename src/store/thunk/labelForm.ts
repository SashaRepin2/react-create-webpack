import { LabelFormSlice } from "@store/reducers/labelFormReducer";
import { AppDispatch, RootState } from "@store/store";

import { ILabel } from "@interfaces/ILabel";

import { labelsAddLabelAction, labelsEditLabelAction } from "../actions/labels";

export default function submitLabelForm() {
    return (dispatch: AppDispatch, getState: RootState) => {
        const editLabel = getState.labelFormReducer.editLabel;
        const formFields = getState.labelFormReducer.fieldsValues;
        let addLabel: ILabel;

        if (editLabel) {
            addLabel = Object.assign({}, editLabel, formFields);
            dispatch(LabelFormSlice.actions.changeEditLabel(null));
            dispatch(labelsEditLabelAction(addLabel));
        } else {
            addLabel = Object.assign({ id: Date.now() }, formFields);
            dispatch(labelsAddLabelAction(addLabel));
        }

        dispatch(LabelFormSlice.actions.resetForm());
    };
}
