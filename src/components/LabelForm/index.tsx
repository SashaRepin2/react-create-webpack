import React from "react";

import { Button, Container } from "@mui/material";
import { HexColorPicker } from "react-colorful";

import useAppDispatch from "../../hooks/useAppDispatch";

import { LabelSlice } from "../../store/reducers/LabelSlice";

import { ILabel } from "../../interfaces/ILabel";

import Input from "../UI/Input";

const initLabel = { title: "", hexColor: "#fff" };

interface ILabelFormProps {
    label: ILabel | null;
    onCloseEdit: () => void;
}

const LabelForm: React.FC<ILabelFormProps> = ({ label, onCloseEdit }) => {
    const dispatch = useAppDispatch();
    const { addLabel, editLabel } = LabelSlice.actions;
    const [labelForm, setLabelForm] = React.useState<{ title: string; hexColor: string }>(
        initLabel
    );

    function onSubmitHandler() {
        if (labelForm.title && labelForm.hexColor) {
            if (label) {
                dispatch(editLabel({ ...label, ...labelForm }));
            } else {
                dispatch(addLabel({ id: Date.now(), ...labelForm }));
            }

            setLabelForm(initLabel);
        }
    }

    function onCloseEditHandler() {
        onCloseEdit();
        setLabelForm(initLabel);
    }

    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                gap: "25px",
                bgcolor: "purple",
                borderRadius: "5px",
                padding: "10px",
            }}
        >
            <Input
                inputValue={labelForm.title}
                placeholderValue={"Title"}
                onChangeHandler={(value) => {
                    setLabelForm({ ...labelForm, title: value });
                }}
            />
            <HexColorPicker
                color={labelForm.hexColor}
                onChange={(value) => {
                    setLabelForm({ ...labelForm, hexColor: value });
                }}
            />

            {label && (
                <Button
                    variant={"contained"}
                    onClick={onCloseEditHandler}
                    sx={{
                        fontWeight: "bold",
                        color: "purple",
                        bgcolor: "#D0BDF4",
                        "&:hover": { bgcolor: "#D0BDF4" },
                    }}
                >
                    Отмена
                </Button>
            )}

            <Button
                variant={"contained"}
                onClick={onSubmitHandler}
                sx={{
                    fontWeight: "bold",
                    color: "purple",
                    bgcolor: "#D0BDF4",
                    "&:hover": { bgcolor: "#D0BDF4" },
                }}
            >
                {!label ? "Добавить" : "Сохранить"}
            </Button>
        </Container>
    );
};

export default LabelForm;
