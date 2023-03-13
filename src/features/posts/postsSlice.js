import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: {
      13: {
        id: 13,
        title: "Hi",
        subrreddit: "aww",
        author_fullname: "Tiago",
        score: "1234",
        num_comments: 37,
        created: "1678641605.0",
      },
    },
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
export const selectPosts = (state) => state.posts.posts;
