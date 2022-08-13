import { Container } from "@mui/material";
import React from "react";
import useAppDispatch from "../../../../hooks/useAppDispatch";
import { LabelSlice } from "../../../../store/reducers/LabelSlice";

const initLabel = { title: "", hexColor: "" };

const AddLabel = () => {
    const dispatch = useAppDispatch();
    const { addLabel, deleteLabels } = LabelSlice.actions;

    const [label, setLabel] = React.useState<{ title: string; hexColor: string }>(initLabel);

    function onSubmitHandler() {
        dispatch(addLabel({ id: Date.now(), ...label }));
    }

    return (
        <Container
            sx={{
                display: "flex",
                alignItems: "center",
            }}
        >
            <input
                value={label.title}
                placeholder={"Title"}
                onChange={(e) => {
                    setLabel({ ...label, title: e.target.value });
                }}
            ></input>
            <input
                value={label.hexColor}
                placeholder={"Hex color"}
                onChange={(e) => {
                    setLabel({ ...label, hexColor: e.target.value });
                }}
            ></input>
            <button
                onClick={() => {
                    dispatch(deleteLabels());
                }}
            >
                Delete all
            </button>
            <button onClick={onSubmitHandler}>Add</button>
        </Container>
    );
};

export default AddLabel;
