import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: {},
  },
  reducers: {
    addPost: (state, action) => {
      const {
        id,
        title,
        subrreddit,
        author_fullname,
        score,
        num_comments,
        created,
      } = action.payload;
      state.posts[id] = {
        id,
        title,
        subrreddit,
        author_fullname,
        score,
        num_comments,
        created,
      };
    },
  },
});

export default postsSlice.reducer;
export const { addPost } = postsSlice.actions;
export const selectPosts = (state) => state.posts;
