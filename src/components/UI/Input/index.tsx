import React from "react";

import { Container, InputBase } from "@mui/material";
import { SxProps } from "@mui/system";

interface IInput {
    inputValue: string;
    placeholderValue?: string;
    sxInput?: SxProps;
    sxContainer?: SxProps;
    onChangeHandler: (value: string) => void;
    onKeyDownHandler?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInput> = ({
    inputValue,
    placeholderValue = "Введите название",
    onChangeHandler,
    onKeyDownHandler,
    sxInput,
    sxContainer,
}) => {
    return (
        <Container
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "5px",
                margin: "5px",
                ...sxContainer,
            }}
        >
            <InputBase
                value={inputValue}
                placeholder={placeholderValue}
                onKeyDown={onKeyDownHandler}
                onChange={(e) => {
                    onChangeHandler(e.target.value);
                }}
                sx={{
                    input: {
                        bgcolor: "#fff",
                        borderRadius: "15px",
                        padding: "5px",
                        color: "#57327e",
                        fontSize: "bold",
                    },
                    ...sxInput,
                }}
            />
        </Container>
    );
};

export default React.memo(Input);
