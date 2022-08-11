import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { LINKS_BOARDS_PAGE } from "../../../consts/links";

const BackButton: React.FC = () => {
    return (
        <Link
            to={LINKS_BOARDS_PAGE}
            className="back-button"
            style={{
                position: "absolute",
                bottom: "25px",
                left: "25px",
                zIndex: "1001",
            }}
        >
            <IconButton
                aria-label="back"
                sx={{
                    height: "64px",
                    width: "64px",
                    bgcolor: "#8458b3",
                    "&:hover": { bgcolor: "#5E229E" },
                }}
            >
                <ArrowBackIcon sx={{ fill: "#fff" }} />
            </IconButton>
        </Link>
    );
};
export default BackButton;
