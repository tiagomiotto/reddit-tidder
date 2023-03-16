import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPostsAPI } from "./postsAPI";

export const loadPosts = createAsyncThunk(
  "posts/loadPosts",
  async (action, { getState }) => {
    const state = getState();

    const response = await fetchPostsAPI(
      "popular",
      25,
      state.posts.lastPostName
    );
    return response;
  }
);
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: {},
    loading: false,
    lastPostName: "",
  },
  reducers: {
    addPost: (state, action) => {
      const {
        id,
        name,
        title,
        subreddit,
        author,
        score,
        num_comments,
        created,
        url_overridden_by_dest,
        is_video,
        media,
        post_hint,
        preview,
        secure_media_embed,
      } = action.payload;
      state.posts[id] = {
        id,
        name,
        title,
        subreddit,
        author,
        score,
        num_comments,
        created,
        url_overridden_by_dest,
        is_video,
        media,
        post_hint,
        preview,
        secure_media_embed,
        voted: "",
      };
      state.lastPostName += name;
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
    setLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: {
    [loadPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = { ...state.posts, ...action.payload };
      state.lastPostName =
        state.posts[
          Object.keys(state.posts)[Object.keys(state.posts).length - 1]
        ].name;
    },
    [loadPosts.rejected]: (state, action) => {
      state.loading = false;
      state.posts = {};
      console.log(action.payload);
    },
  },
});

export default postsSlice.reducer;
export const { addPost, voteOnPostId, setLoading } = postsSlice.actions;
export const selectPosts = (state) => state.posts.posts;
export const selectPostById = (state, id) => state.posts.posts[id];
export const selectIsLoading = (state) => state.posts.loading;
