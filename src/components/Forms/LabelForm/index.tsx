import React, { FC, memo, useEffect, useState } from "react";

import { Container, Typography } from "@mui/material";
import { HexColorPicker } from "react-colorful";

import LabelFormButtons from "./components/Buttons";
import Input from "@components/UI/Input";

import useAppDispatch from "@hooks/useAppDispatch";

import { labelsAddLabelAction, labelsEditLabelAction } from "@src/store/actions/labels";

import { ILabel } from "@src/interfaces/ILabel";
import ILabelForm from "@src/interfaces/ILabelForm";

const initLabel = {
    title: "",
    hexColor: "#fff",
};

interface ILabelFormProps {
    editableLabel: ILabel | null;
    onCloseEditForm: () => void;
}

const LabelForm: FC<ILabelFormProps> = ({ editableLabel, onCloseEditForm }) => {
    const dispatch = useAppDispatch();

    const [label, setLabel] = useState<ILabelForm>(editableLabel || initLabel);

    useEffect(() => {
        setLabel(
            editableLabel
                ? {
                      title: editableLabel.title,
                      hexColor: editableLabel.hexColor,
                  }
                : initLabel,
        );
    }, [editableLabel]);

    function onSubmitFormHandler() {
        if (editableLabel) {
            dispatch(
                labelsEditLabelAction({
                    ...editableLabel,
                    ...label,
                }),
            );
            onCloseEditForm();
        } else {
            dispatch(
                labelsAddLabelAction({
                    id: Date.now(),
                    ...label,
                }),
            );
        }

        setLabel(initLabel);
    }

    function onCloseFormHandler() {
        setLabel(initLabel);
    }

    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
                bgcolor: "purple",
                borderRadius: "5px",
                padding: "10px",
            }}
        >
            {editableLabel && (
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant={"h5"}
                        sx={{
                            color: "#fff",
                        }}
                    >
                        Редактирование
                    </Typography>
                </Container>
            )}
            <Input
                inputValue={label.title}
                placeholderValue={"Title"}
                onChangeHandler={(value) => {
                    setLabel({
                        ...label,
                        title: value,
                    });
                }}
            />
            <HexColorPicker
                color={label.hexColor}
                onChange={(value) => {
                    setLabel({
                        ...label,
                        hexColor: value,
                    });
                }}
            />
            <LabelFormButtons
                isEdit={Boolean(editableLabel)}
                onSubmit={onSubmitFormHandler}
                onClose={onCloseFormHandler}
            />
        </Container>
    );
};

export default memo(LabelForm);
