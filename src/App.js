import React from "react";

import { PostList } from "./features/posts/PostList";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Route } from "react-router-dom";
import { PostDetail } from "./features/posts/PostDetail/PostDetail";
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Route path="/" element={
        <PostList />} />
      <Route path="/posts/:id" element={
        <PostDetail />} />
    </div>
  );
}

export default App;
