import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "../Common/score";

export default configureStore({
    reducer: {
        score: scoreReducer
    }
})