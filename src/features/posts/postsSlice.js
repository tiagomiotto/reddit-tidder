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
    searchTerm: "",
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
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = { ...state.posts, ...action.payload };
        state.lastPostName =
          state.posts[
            Object.keys(state.posts)[Object.keys(state.posts).length - 1]
          ].name;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.loading = false;
        state.posts = {};
        console.log(action.payload);
      });
  },
});

export default postsSlice.reducer;
export const { addPost, voteOnPostId, setLoading, setSearchTerm } =
  postsSlice.actions;
export const selectAllPosts = (state) => state.posts.posts;
export const selectPosts = (state) => {
  const filteredPosts = {};
  Object.keys(state.posts.posts).forEach((key) => {
    if (
      state.posts.posts[key].title
        .toLowerCase()
        .includes(state.posts.searchTerm.toLowerCase())
    ) {
      filteredPosts[key] = state.posts.posts[key];
    }
  });
  return filteredPosts;
};
export const selectPostById = (state, id) => state.posts.posts[id];
export const selectIsLoading = (state) => state.posts.loading;
