import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const BOARDS_GET_ALL_BOARD = "BOARDS/GET_ALL_BOARDS";

export const getBoardsThunk = createAsyncThunk<
    { message: string },
    undefined,
    { rejectValue: string }
>(BOARDS_GET_ALL_BOARD, async (_, { rejectWithValue }) => {
    try {
        const response = await fetch("http://localhost:3000/boards", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Не удалось загрузить доски!");
        }

        return await response.json();
    } catch (error) {
        const errorMessage = (error as Error).message;

        toast.error(errorMessage, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
        return rejectWithValue(errorMessage);
    }
});
