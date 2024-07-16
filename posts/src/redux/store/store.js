import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "../actions/PostsSlice";

const store = configureStore({
    reducer : {
        posts : PostsSlice,
    }
})

export default store