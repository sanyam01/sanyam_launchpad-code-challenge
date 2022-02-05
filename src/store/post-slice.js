import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",

  initialState: {
    posts: [],
    totalPosts: 0,
    changed: false,
  },

  reducers: {
    replaceCart(state, action){
      console.log("I am inside the replacecart");
      state.posts = action.payload.posts;
      state.totalPosts = action.payload.totalPosts;
      state.changed = true;
    }
  },
});

export const postActions = postSlice.actions;

export default postSlice;
