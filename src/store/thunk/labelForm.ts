import { LabelFormSlice } from "@store/reducers/labelForm";
import { AppDispatch, RootState } from "@store/store";

import { ILabel } from "@interfaces/ILabel";
import ILabelForm from "@src/interfaces/ILabelForm";

import { labelsAddLabelAction, labelsEditLabelAction } from "../actions/labels";

export default function submitLabelForm(formFields: ILabelForm) {
    return (dispatch: AppDispatch, getState: RootState) => {
        const editLabel = getState.labelFormReducer.editLabel;
        let addLabel: ILabel;

        if (editLabel) {
            addLabel = Object.assign({}, editLabel, formFields);
            dispatch(LabelFormSlice.actions.updateEditLabel(null));
            dispatch(labelsEditLabelAction(addLabel));
        } else {
            addLabel = Object.assign(
                {
                    id: Date.now(),
                },
                formFields,
            );
            dispatch(labelsAddLabelAction(addLabel));
        }

        dispatch(LabelFormSlice.actions.updateEditLabel(null));
    };
}
