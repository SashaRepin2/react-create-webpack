import { createAction } from "@reduxjs/toolkit";

import { ILabel } from "@src/interfaces/ILabel";

const LABELS_ADD_LABEL = "LABELS/ADD_LABEL";
const LABELS_EDIT_LABEL = "LABELS/EDIT_LABEL ";
const LABELS_DELETE_LABEL = "LABELS/DELETE_LABEL";
const LABELS_DELETE_LABELS = "LABELS/DELETE_LABELS";

export const labelsAddLabelAction = createAction<ILabel>(LABELS_ADD_LABEL);

export const labelsEditLabelAction = createAction<ILabel>(LABELS_EDIT_LABEL);

export const labelsDeleteLabelAction = createAction<number>(LABELS_DELETE_LABEL);

export const labelsDeleteLabelsAction = createAction(LABELS_DELETE_LABELS);
