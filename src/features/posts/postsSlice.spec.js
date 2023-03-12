import postReducer, { addPost } from "./postsSlice";

describe("posts reducer", () => {
  it("should handle initial state", () => {
    expect(postReducer(undefined, { type: "unkown" })).toEqual({ posts: {} });
  });

  it("should handle a new post", () => {
    const newPostInput = {
      id: 13,
      title: "Hi",
      subrreddit: "aww",
      author_fullname: "Tiago",
      score: "1234",
      num_comments: 37,
    };
    const expected = {
      posts: {
        13: {
          id: 13,
          title: "Hi",
          subrreddit: "aww",
          author_fullname: "Tiago",
          score: "1234",
          num_comments: 37,
        },
      },
    };

    expect(postReducer(undefined, addPost(newPostInput))).toEqual(expected);
  });
});
