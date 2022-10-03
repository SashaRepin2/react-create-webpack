import React, { FC, memo } from "react";

import { Box, Button } from "@mui/material";

interface ILabelFormButtonsProps {
    isEdit?: boolean;
    onSubmit: () => void;
    onClose: () => void;
}

const LabelFormButtons: FC<ILabelFormButtonsProps> = ({ isEdit = false, onSubmit, onClose }) => {
    return (
        <Box
            sx={{
                display: "flex",
                columnGap: "10px",
            }}
        >
            {isEdit && (
                <Button
                    variant={"contained"}
                    onClick={onClose}
                    sx={{
                        fontWeight: "bold",
                        color: "purple",
                        bgcolor: "#D0BDF4",
                        "&:hover": {
                            bgcolor: "#D0BDF4",
                        },
                    }}
                >
                    Отмена
                </Button>
            )}

            <Button
                variant={"contained"}
                onClick={onSubmit}
                sx={{
                    fontWeight: "bold",
                    color: "purple",
                    bgcolor: "#D0BDF4",
                    "&:hover": {
                        bgcolor: "#D0BDF4",
                    },
                }}
            >
                {isEdit ? "Сохранить" : "Добавить"}
            </Button>
        </Box>
    );
};

export default memo(LabelFormButtons);
