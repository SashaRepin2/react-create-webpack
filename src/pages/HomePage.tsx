import React, { useCallback, useState } from "react";

import { Container } from "@mui/material";

import BoardsGroup from "../components/BoardsGroup";
import BoardForm from "../components/Forms/BoardForm";

const HomePage: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const onChangeFormExpanded = useCallback(() => {
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
