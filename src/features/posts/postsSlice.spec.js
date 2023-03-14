import postReducer, { addPost, voteOnPostId } from "./postsSlice";

describe("posts reducer", () => {
  const initialState = {
    posts: {
      14: {
        id: 14,
        title: "Hi",
        subreddit: "aww",
        author: "Tiago",
        score: 1234,
        num_comments: 37,
        created: "1678641605.0",
      },
    },
  };
  it("should handle initial state", () => {
    expect(postReducer(undefined, { type: "unkown" }).posts).toEqual({});
  });

  it("should handle a new post", () => {
    const newPostInput = {
      id: 13,
      title: "Hi",
      subreddit: "aww",
      author: "Tiago",
      score: 1234,
      num_comments: 37,
      created: "1678641605.0",
      is_video: false,
      media: null,
      url_overridden_by_dest: null,
    };
    const expected = {
      13: {
        id: 13,
        title: "Hi",
        subreddit: "aww",
        author: "Tiago",
        score: 1234,
        num_comments: 37,
        created: "1678641605.0",
        is_video: false,
        media: null,
        url_overridden_by_dest: null,
      },
    };

    expect(postReducer(undefined, addPost(newPostInput)).posts).toEqual(
      expected
    );
  });
  it("should upvote a post", () => {
    const id = 14;
    const vote = 1;
    const newVote = { id, vote };

    const expected = 1235;

    const result = postReducer(initialState, voteOnPostId(newVote));
    expect(result.posts[id].score).toEqual(expected);
  });

  it("should downvote a post", () => {
    const id = 14;
    const vote = -1;
    const newVote = { id, vote };

    const expected = 1233;

    const result = postReducer(initialState, voteOnPostId(newVote));
    expect(result.posts[id].score).toEqual(expected);
  });
});
