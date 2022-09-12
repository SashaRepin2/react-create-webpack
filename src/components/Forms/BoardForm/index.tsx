import React, { memo, useState } from "react";

import AddBoxIcon from "@mui/icons-material/AddBox";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    TextField,
    Typography,
} from "@mui/material";

import useAppDispatch from "@hooks/useAppDispatch";

import { boardsAddBoardAction } from "@store/actions/boards";

import "./BoardForm.scss";

interface IBoardFormProps {
    isExpanded: boolean;
    setIsExpanded: () => void;
}

const BoardForm: React.FC<IBoardFormProps> = ({ isExpanded, setIsExpanded }) => {
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState<string>("");

    function onSubmitHanlder() {
        if (inputValue) {
            dispatch(
                boardsAddBoardAction({
                    id: Date.now(),
                    title: inputValue,
                    sequenceLists: [],
                })
            );
            setInputValue("");
            setIsExpanded();
        }
    }

    function onCancelHandler() {
        setInputValue("");
        setIsExpanded();
    }

    return (
        <Box className={"board-form"}>
            <Accordion
                expanded={isExpanded}
                onChange={setIsExpanded}
                sx={{ boxShadow: 4 }}
            >
                <AccordionSummary className={"board-form__header"}>
                    <AddBoxIcon />
                    <Typography variant={"h5"}>Добавить доску</Typography>
                </AccordionSummary>
                <AccordionDetails className={"board-form__body"}>
                    <TextField
                        value={inputValue}
                        placeholder={"Название доски"}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                    />
                    <Box className="board-form__options">
                        <Button
                            variant="contained"
                            color="error"
                            onClick={onCancelHandler}
                        >
                            Отмена
                        </Button>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={onSubmitHanlder}
                        >
                            Добавить
                        </Button>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default memo(BoardForm);
