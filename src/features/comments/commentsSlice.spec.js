import commentsReducer, { addComment } from './commentsSlice'


describe("comments reducer", () => {
    it("should handle initial state", () => {
        expect(commentsReducer(undefined, { type: "unkown" })).toEqual({
            comments: {},
        });
    });
    it("should handle a new comment", () => {
        const newCommentInput = {
            id: 13,
            body: "Hi",
            score: 1234,
            author: "Tiago",
            parent_id: "t3_123",
            is_reply: false,
            children: []
        }
        const expected = {
            13: {
                id: 13,
                body: "Hi",
                score: 1234,
                author: "Tiago",
                parent_id: "t3_123",
                children: []
            }
        };
        expect(commentsReducer(undefined, addComment(newCommentInput))).toEqual({
            comments: expected,
        });
    });
});