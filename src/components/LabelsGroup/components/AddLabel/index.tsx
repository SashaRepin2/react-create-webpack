import React from "react";

import { Box, Button, Container } from "@mui/material";
import { HexColorPicker } from "react-colorful";

import Input from "../../../UI/Input/Input";

import useAppDispatch from "../../../../hooks/useAppDispatch";
import { LabelSlice } from "../../../../store/reducers/LabelSlice";

const initLabel = { title: "", hexColor: "#fff" };

const AddLabel = () => {
    const dispatch = useAppDispatch();
    const { addLabel } = LabelSlice.actions;
    const [labelForm, setLabelForm] = React.useState<{ title: string; hexColor: string }>(
        initLabel
    );

    function onSubmitHandler() {
        if (labelForm.title && labelForm.hexColor) {
            dispatch(addLabel({ id: Date.now(), ...labelForm }));
            setLabelForm(initLabel);
        }
    }

    return (
        <Container
            sx={{
                height: "min-content",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                bgcolor: "purple",
                borderRadius: "5px",
                padding: "10px 5px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    margin: "15px 0",
                }}
            >
                <Input
                    inputValue={labelForm.title}
                    placeholderValue={"Title"}
                    onChangeHandler={(value) => {
                        setLabelForm({ ...labelForm, title: value });
                    }}
                    sxContainer={{ marginBottom: "15px" }}
                />
                <HexColorPicker
                    color={labelForm.hexColor}
                    onChange={(value) => {
                        setLabelForm({ ...labelForm, hexColor: value });
                    }}
                />
            </Box>
            <Button
                variant="contained"
                onClick={onSubmitHandler}
                sx={{
                    fontWeight: "bold",
                    color: "purple",
                    bgcolor: "#D0BDF4",
                    "&:hover": { bgcolor: "#D0BDF4" },
                }}
            >
                Добавить
            </Button>
        </Container>
    );
};

export default AddLabel;
