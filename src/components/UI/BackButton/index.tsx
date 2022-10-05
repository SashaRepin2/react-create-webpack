import React, { FC } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BackButton: FC = () => {
    const navigate = useNavigate();

    function onClickHandler() {
        navigate(-1);
    }

    return (
        <IconButton
            className="back-button"
            aria-label="back"
            onClick={onClickHandler}
            sx={{
                position: "fixed",
                bottom: "25px",
                left: "25px",
                zIndex: "1001",
                height: "64px",
                width: "64px",
                bgcolor: "#8458b3",
                "&:hover": {
                    bgcolor: "#5E229E",
                },
            }}
        >
            <ArrowBackIcon
                sx={{
                    fill: "#fff",
                }}
            />
        </IconButton>
    );
};
export default BackButton;
