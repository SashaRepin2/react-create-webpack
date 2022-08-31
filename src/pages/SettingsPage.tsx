import React from "react";

import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Container, Divider, Typography } from "@mui/material";

import LabelForm from "../components/LabelForm";
import LabelsGroup from "../components/LabelsGroup";

import useAppDispatch from "../hooks/useAppDispatch";

import getBoardsThunk from "../store/thunk/getBoards";

const SettingsPage: React.FC = () => {
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(getBoardsThunk());
    }, []);

    return (
        <Container
            sx={{
                padding: "15px 10px",
                bgcolor: "#D0BDF4",
                borderRadius: "10px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: "min-content",
                    bgcolor: "#8458b3",
                    padding: "5px 15px",
                    borderRadius: "10px",
                }}
            >
                <Typography
                    variant={"h6"}
                    sx={{
                        marginRight: "10px",
                        color: "#fff",
                        lineHeight: "normal",
                        fontWeight: "bold",
                    }}
                >
                    Настройки
                </Typography>
                <SettingsIcon
                    sx={{
                        fill: "#fff",
                        height: "32px",
                        width: "32px",
                    }}
                />
            </Box>
            <Divider
                variant={"fullWidth"}
                sx={{
                    "&::after, &::before": { borderWidth: "2px" },
                    margin: "15px 0",
                }}
            >
                <Typography
                    variant={"subtitle2"}
                    sx={{
                        color: "#fff",
                        bgcolor: "#8458b3",
                        padding: "5px 10px",
                        borderRadius: "10px",
                        lineHeight: "normal",
                        fontWeight: "bold",
                    }}
                >
                    Метки
                </Typography>
            </Divider>
            <Container
                sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr min-content",
                    justifyContent: "flex-start",
                    columnGap: "10px",
                    padding: "5px",
                }}
            >
                <LabelsGroup />
                <LabelForm />
            </Container>
        </Container>
    );
};

export default SettingsPage;
