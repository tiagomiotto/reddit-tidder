import postReducer, { addPost } from "./postsSlice";

describe("posts reducer", () => {
  it("should handle initial state", () => {
    expect(postReducer(undefined, { type: "unkown" })).toEqual({ posts: {} });
  });

  it("should handle a new post", () => {
    const newPostInput = {
      id: 13,
      title: "Hi",
      subreddit: "aww",
      author_fullname: "Tiago",
      score: "1234",
      num_comments: 37,
      created: "1678641605.0",
    };
    const expected = {
      posts: {
        13: {
          id: 13,
          title: "Hi",
          subreddit: "aww",
          author_fullname: "Tiago",
          score: "1234",
          num_comments: 37,
          created: "1678641605.0",
        },
      },
    };

    expect(postReducer(undefined, addPost(newPostInput))).toEqual(expected);
  });
});
