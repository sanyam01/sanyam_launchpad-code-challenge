import { configureStore } from '@reduxjs/toolkit';
import postSlice from './post-slice';

const store = configureStore({
 
    reducer:  {posts: postSlice.reducer},
});

export default store;