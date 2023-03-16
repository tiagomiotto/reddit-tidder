const url = "https://www.reddit.com";

export async function fetchPostsAPI(subreddit, limit = 100, lastItemName) {
  const queryUrl = `${url}/r/${subreddit}.json?limit=${limit}&after=${lastItemName}`;
  try {
    const response = await fetch(queryUrl);
    const responseJSON = await response.json();

    // Pick just the relevant values from the API response
    const parsedDataChildren = responseJSON.data.children.map((post) => {
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
      } = post.data;

      return {
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
    });

    const postsLoaded = {};

    // Format the data in the slice format
    Object.keys(parsedDataChildren).forEach((key) => {
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
      } = parsedDataChildren[key];

      postsLoaded[id] = {
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
    });
    return postsLoaded;
  } catch (e) {
    console.log(e.message);
  }
}
