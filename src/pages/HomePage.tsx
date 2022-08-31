import React from "react";

import { Container } from "@mui/material";

import { BoardForm } from "../components";
import BoardsGroup from "../components/BoardsGroup";

const HomePage: React.FC = () => {
    const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

    const onChangeFormExpanded = React.useCallback(() => {
        setIsExpanded(!isExpanded);
    }, [isExpanded]);

    return (
        <Container
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridTemplateRows: "minmax(512px, min-content)",
                gridGap: "50px",
                justifyContent: "space-around",
            }}
        >
            <Container>
                <BoardForm
                    isExpanded={isExpanded}
                    setIsExpanded={onChangeFormExpanded}
                />
            </Container>
            <BoardsGroup />
        </Container>
    );
};

export default HomePage;
