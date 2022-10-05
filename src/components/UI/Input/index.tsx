import React, { FC, memo } from "react";

import { Box, InputBase } from "@mui/material";
import { SxProps } from "@mui/system";

interface IInput {
    inputValue: string;
    placeholderValue?: string;
    sxInput?: SxProps;
    sxContainer?: SxProps;
    onChangeHandler: (value: string) => void;
    onKeyDownHandler?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: FC<IInput> = ({
    inputValue,
    placeholderValue = "Введите название",
    onChangeHandler,
    onKeyDownHandler,
    sxInput,
    sxContainer,
}) => {
    return (
        <Box
            sx={{
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
        </Box>
    );
};

export default memo(Input);
