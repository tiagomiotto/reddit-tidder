import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments: {
            13: {
                id: 13,
                body: "Hi",
                score: 1234,
                author: "Tiago",
                parent_id: "t3_123",
                children: []
            }
        }
    },
    reducers: {
        addComment: (state, action) => {
            const { id, body, author, score, parent_id, children } = action.payload;
            state.comments[id] = {
                id,
                body,
                author,
                score,
                parent_id,
                children,
            }
        }
    }
});

export default commentsSlice.reducer;
export const { addComment } = commentsSlice.actions;
export const selectCommentById = (state, id) => state.comments.comments[id];