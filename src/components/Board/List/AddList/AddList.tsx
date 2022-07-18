import React from "react";
import useAppDispatch from "../../../../hooks/useAppDispatch";

import { Box, IconButton, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface AddListProps {
    onAddListHandler: () => void;
}

const AddList: React.FC<AddListProps> = () => {
    const dispach = useAppDispatch();
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    function onAddListHandler() {
        console.log("add");
    }

    return (
        <Paper variant={"outlined"} elevation={3}>
            {isOpen ? (
                <Box></Box>
            ) : (
                <Box>
                    <Typography>Добавить список</Typography>
                    <IconButton
                        onClick={() => {
                            setIsOpen(true);
                        }}
                    >
                        <AddIcon />
                    </IconButton>
                </Box>
            )}
        </Paper>
    );
};

export default AddList;
