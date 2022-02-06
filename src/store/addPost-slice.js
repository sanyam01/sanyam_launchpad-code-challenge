import { createSlice } from "@reduxjs/toolkit";

const addPostSlice = createSlice({
  name: "addPosts",

  initialState: {
    addPostState: false,
    editPostState: false,
    editPostId: null,
    editPostBody: null,
    editPostTitle: null,
    editPostUserId: null,
  },

  reducers: {
    changePostState(state, action){
      console.log("I am inside the changePostState");
      state.addPostState = action.payload.postState;
      
    },

    changeEditState(state, action){
        
        state.editPostState = action.payload.postState;
        state.editPostId = action.payload.idState;
        state.editPostTitle = action.payload.titleState;
        state.editPostBody = action.payload.bodyState;
        state.editPostUserId = action.payload.userIdState;
        console.log("Value of posts is " + action.payload.editState);
    }


  },
});

export const addPostActions = addPostSlice.actions;

export default addPostSlice;
