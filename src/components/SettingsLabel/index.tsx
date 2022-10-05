import React, { useCallback } from "react";

import { Container } from "@mui/material";

import { ILabel } from "@src/interfaces/ILabel";

import LabelForm from "../Forms/LabelForm";
import LabelsGroup from "../LabelsGroup";

const SettingsLabel = () => {
    const [editableLabel, setEditableLabel] = React.useState<ILabel | null>(null);

    const onEditLabelHandler = useCallback(
        (label: ILabel) => {
            setEditableLabel(label);
        },
        [editableLabel],
    );

    const onCloseEditFormHandler = useCallback(() => setEditableLabel(null), []);

    return (
        <Container
            sx={{
                display: "grid",
                gridTemplateColumns: "1fr min-content",
                justifyContent: "flex-start",
                columnGap: "10px",
                padding: "5px",
            }}
        >
            <LabelsGroup onEditLabel={onEditLabelHandler} />
            <LabelForm
                editableLabel={editableLabel}
                onCloseEditForm={onCloseEditFormHandler}
            />
        </Container>
    );
};

export default SettingsLabel;
