import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@store/store";

export const selectLabels = (state: RootState) => state.labelsReducer.labels;
export const selectLabelId = (state: RootState, labelId: number) => labelId;

export const selectAllLabels = createSelector([selectLabels], (labels) => labels);

export const selectLabelById = createSelector([selectLabels, selectLabelId], (labels, labelId) => {
    return labels.find((label) => label.id === labelId);
});
