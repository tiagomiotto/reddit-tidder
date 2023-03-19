import postReducer, {
  addPost,
  voteOnPostId,
  setSearchTerm,
} from "./postsSlice";

describe("posts reducer", () => {
  const initialState = {
    posts: {
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
        voted: "",
      },
      14: {
        id: 14,
        title: "Hello",
        subreddit: "aww",
        author: "Tiago",
        score: 1234,
        num_comments: 37,
        created: "1678641605.0",
        is_video: false,
        media: null,
        url_overridden_by_dest: null,
        voted: "",
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
      is_video: false,
      media: false,
      post_hint: false,
      preview: false,
      secure_media_embed: false,
      voted: "",
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
        is_video: false,
        media: false,
        post_hint: false,
        preview: false,
        secure_media_embed: false,
        voted: "",
      },
    };

    expect(postReducer(undefined, addPost(newPostInput)).posts).toEqual(
      expected
    );
  });
  it("should upvote a post", () => {
    const id = 14;

    const newVote = { id, vote: "up" };

    const expected = 1235;

    const result = postReducer(initialState, voteOnPostId(newVote));
    expect(result.posts[id].score).toEqual(expected);
  });

  it("should downvote a post", () => {
    const id = 14;

    const newVote = { id, vote: "down" };

    const expected = 1233;

    const result = postReducer(initialState, voteOnPostId(newVote));
    expect(result.posts[id].score).toEqual(expected);
  });

  it("should save the search term", () => {
    const searchTerm = "dogs";
    const expected = "dogs";

    expect(
      postReducer(undefined, setSearchTerm(searchTerm)).searchTerm
    ).toEqual(expected);
  });
});
