const url = "https://www.reddit.com";

export async function fetchPostsAPI(subreddit) {
  const queryUrl = url + "/r/" + subreddit + ".json";
  const response = await fetch(queryUrl);
  const responseJSON = await response.json();

  const parsedData = responseJSON.data.children.map((post) => {
    const {
      id,
      title,
      subreddit,
      author_fullname,
      score,
      num_comments,
      created,
      url_overridden_by_dest,
      is_video,
      media,
    } = post.data;

    return {
      id,
      title,
      subreddit,
      author_fullname,
      score,
      num_comments,
      created,
      url_overridden_by_dest,
      is_video,
      media,
    };
  });

  return parsedData;
}
