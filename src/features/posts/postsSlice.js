import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPostsAPI } from "./postsAPI";

export const loadPosts = createAsyncThunk(
  "posts/loadPosts",
  async (thunkAPI) => {
    const response = await fetchPostsAPI("popular");
    return response;
  }
);
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: {
      13: {
        id: 13,
        title: "Hi",
        subreddit: "aww",
        author: "Tiago",
        score: 1234,
        num_comments: 37,
        created: 1678641605.0,
        is_video: false,
        media: null,
        url_overridden_by_dest: null,
        voted: "",
      },
    },
    loading: false,
  },
  reducers: {
    addPost: (state, action) => {
      const {
        id,
        title,
        subreddit,
        author,
        score,
        num_comments,
        created,
        url_overridden_by_dest,
        is_video,
        media,
      } = action.payload;
      state.posts[id] = {
        id,
        title,
        subreddit,
        author,
        score,
        num_comments,
        created,
        url_overridden_by_dest,
        is_video,
        media,
        voted: "",
      };
    },
    voteOnPostId: (state, action) => {
      const { id, vote } = action.payload;

      switch (vote) {
        case "up":
          state.posts[id].score += 1;
          state.posts[id].voted = "up";
          break;
        case "down":
          state.posts[id].score -= 1;
          state.posts[id].voted = "down";
          break;
        default:
          if (state.posts[id].voted === "up") {
            state.posts[id].score -= 1;
          } else if (state.posts[id].voted === "down") {
            state.posts[id].score += 1;
          }
          state.posts[id].voted = "";
          break;
      }
    },
  },
  extraReducers: {
    [loadPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [loadPosts.rejected]: (state, action) => {
      state.loading = false;
      state.posts = {};
      console.log(action.payload);
    },
  },
});

export default postsSlice.reducer;
export const { addPost, voteOnPostId } = postsSlice.actions;
export const selectPosts = (state) => state.posts.posts;
export const selectPostById = (state, id) => state.posts.posts[id];
