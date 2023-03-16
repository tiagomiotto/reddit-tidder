import React from "react";

import { PostList } from "./features/posts/PostList";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <PostList />
    </div>
  );
}

export default App;
