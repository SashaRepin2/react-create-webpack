import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { boardsUpdateStoreAction } from "../actions/boards";

const BOARDS_GET_ALL_BOARD = "BOARDS/GET_ALL_BOARDS";

export const getBoardsThunk = createAsyncThunk<
    { message: string },
    undefined,
    { rejectValue: string }
>(BOARDS_GET_ALL_BOARD, async (_, { rejectWithValue, dispatch }) => {
    try {
        dispatch(boardsUpdateStoreAction(true));

        const response = await fetch("http://localhost:3000/boards", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();

        dispatch(boardsUpdateStoreAction(false));

        return data;
    } catch (error) {
        const { message } = error as Error;

        toast.error("Не удалось загрузить доски!", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });

        dispatch(boardsUpdateStoreAction(false));
        return rejectWithValue(message);
    }
});
