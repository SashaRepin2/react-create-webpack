import React from "react";

import { Container, Typography } from "@mui/material";

const NotFoundPage: React.FC = () => {
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography variant={"h4"}>Not found!</Typography>
        </Container>
    );
};

export default NotFoundPage;
