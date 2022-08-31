import { createAsyncThunk } from "@reduxjs/toolkit";

const getBoardsThunk = createAsyncThunk<{ message: string }, undefined, { rejectValue: string }>(
    "board/fetchBoards",
    async (_, { rejectWithValue }) => {
        try {
            const promise = new Promise((resolve) => {
                setTimeout(() => resolve({ message: "okay" }), 5000);
            });

            const data = (await promise.then((result) => result)) as { message: string };

            return data;
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

export default getBoardsThunk;
