const url = "https://www.reddit.com";

export async function fetchPostsAPI(subreddit) {
  const queryUrl = url + "/r/" + subreddit + ".json?limit=100";

  try {
    const response = await fetch(queryUrl);
    const responseJSON = await response.json();

    // Pick just the relevant values from the API response
    const parsedDataChildren = responseJSON.data.children.map((post) => {
      const {
        id,
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
      } = post.data;

      return {
        id,
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
    });

    const postsLoaded = {};

    // Format the data in the slice format
    Object.keys(parsedDataChildren).forEach((key) => {
      const {
        id,
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
      } = parsedDataChildren[key];

      postsLoaded[id] = {
        id,
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
    });
    return postsLoaded;
  } catch (e) {
    console.log(e.message);
  }
}
