import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@store/store";

const selectLabelId = (state: RootState, labelId: number) => labelId;

export const selectALl = (state: RootState) => state.labelsReducer;
export const selectLabels = (state: RootState) => state.labelsReducer.labels;

export const selectLabelById = createSelector([selectLabels, selectLabelId], (labels, labelId) => {
    return labels.find((label) => label.id === labelId);
});

const labelsSelector = {
    selectLabelById,
    selectALl,
    selectLabels,
};

export default labelsSelector;
