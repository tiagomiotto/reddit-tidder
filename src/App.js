import React from "react";
import logo from "./logo.svg";
import { PostList } from "./features/posts/PostList";
import "./App.css";
import { Post } from "./features/posts/Post";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Post
        id={13}
        title={"Hi"}
        subrreddit={"aww"}
        author_fullname={"Tiago"}
        score={"1234"}
        num_comments={37}
        created={"1678641605.0"}
      />
      {/* <PostList /> */}
    </div>
  );
}

export default App;
