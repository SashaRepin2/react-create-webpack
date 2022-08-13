import { Container, Divider, Typography } from "@mui/material";
import React from "react";
import LabelsGroup from "../components/LabelsGroup";
import AddLabel from "../components/LabelsGroup/components/AddLabel";

const SettingsPage: React.FC = () => {
    return (
        <Container
            sx={{
                padding: "15px 10px",
                bgcolor: "#D0BDF4",
                borderRadius: "10px",
            }}
        >
            <Typography
                variant={"h6"}
                sx={{
                    width: "min-content",
                    color: "#fff",
                    bgcolor: "#8458b3",
                    padding: "5px 15px",
                    borderRadius: "10px",
                    lineHeight: "normal",
                    fontWeight: "bold",
                }}
            >
                Settings
            </Typography>

            <Divider
                variant={"fullWidth"}
                sx={{ "&::after, &::before": { borderWidth: "2px" }, margin: "15px 0" }}
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
                    Labels
                </Typography>
            </Divider>
            <LabelsGroup />
            <AddLabel />
        </Container>
    );
};

export default SettingsPage;
