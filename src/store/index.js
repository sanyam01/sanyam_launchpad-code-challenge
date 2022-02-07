import { configureStore } from "@reduxjs/toolkit";
import addPostSlice from "./addPost-slice";
import postSlice from "./post-slice";
import universitySlice from "./university-slice";

const store = configureStore({
  reducer: {
    posts: postSlice.reducer,
    addPosts: addPostSlice.reducer,
    universities: universitySlice.reducer,
  },
});

export default store;
