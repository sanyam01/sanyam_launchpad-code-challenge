import { configureStore } from '@reduxjs/toolkit';
import addPostSlice from './addPost-slice';
import postSlice from './post-slice';

const store = configureStore({
 
    reducer:  {posts: postSlice.reducer, addPosts: addPostSlice.reducer},
});

export default store;