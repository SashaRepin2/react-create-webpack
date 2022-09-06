import React, { memo } from "react";

import { Box, Button, Container, Typography } from "@mui/material";
import { HexColorPicker } from "react-colorful";

import Input from "@components/UI/Input";

import useAppDispatch from "@hooks/useAppDispatch";
import useAppSelector from "@hooks/useAppSelector";

import { LabelFormSlice } from "@store/reducers/labelFormReducer";
import { store } from "@store/store";
import submitLabelForm from "@store/thunk/labelForm";

const LabelForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const { initLabel, editLabel } = useAppSelector((state) => {
        return {
            initLabel: state.labelFormReducer.fieldsValues,
            editLabel: state.labelFormReducer.editLabel,
        };
    });

    const { changeHexColor, changeTitle, resetForm } = LabelFormSlice.actions;

    function onSubmitFormHandler() {
        submitLabelForm()(dispatch, store.getState());
    }

    function onCloseFormHandler() {
        dispatch(resetForm());
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
            {editLabel && (
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
                inputValue={initLabel.title}
                placeholderValue={"Title"}
                onChangeHandler={(value) => {
                    dispatch(changeTitle(value));
                }}
            />
            <HexColorPicker
                color={initLabel.hexColor}
                onChange={(value) => {
                    dispatch(changeHexColor(value));
                }}
            />

            <Box sx={{ display: "flex", columnGap: "10px" }}>
                {editLabel && (
                    <Button
                        variant={"contained"}
                        onClick={onCloseFormHandler}
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
                    onClick={onSubmitFormHandler}
                    sx={{
                        fontWeight: "bold",
                        color: "purple",
                        bgcolor: "#D0BDF4",
                        "&:hover": { bgcolor: "#D0BDF4" },
                    }}
                >
                    {editLabel ? "Сохранить" : "Добавить"}
                </Button>
            </Box>
        </Container>
    );
};

export default memo(LabelForm);
