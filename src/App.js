import React from "react";
import logo from "./logo.svg";
import { PostList } from "./features/posts/PostList";
import "./App.css";
import { Post } from "./features/posts/Post";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <PostList />
    </div>
  );
}

export default App;
