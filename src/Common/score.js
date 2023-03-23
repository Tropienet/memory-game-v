import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
    name: "score",
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        reset: state => {
            state.value = 0;
        }
    }
})

export const { increment, reset } = scoreSlice.actions

export default scoreSlice.reducer

