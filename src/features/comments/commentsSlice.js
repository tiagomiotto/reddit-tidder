import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments: {}
    },
    reducers: {
        addComment: (state, action) => {
            const { id, body, author, score, parent_id, is_reply } = action.payload;
            state.comments[id] = {
                id,
                body,
                author,
                score,
                parent_id,
                is_reply
            }
        }
    }
});

export default commentReducer = commentsSlice.reducer;
export const { addComment } = commentsSlice.actions;