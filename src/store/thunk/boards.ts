import { createAsyncThunk } from "@reduxjs/toolkit";

const getBoardsThunk = createAsyncThunk<{ message: string }, undefined, { rejectValue: string }>(
    "board/fetchBoards",
    async () => {
        const promise = new Promise((resolve) => {
            setTimeout(() => resolve({ message: "okay" }), 500);
        });

        const data = (await promise.then((result) => result)) as { message: string };

        return data;
    }
);

export default getBoardsThunk;
