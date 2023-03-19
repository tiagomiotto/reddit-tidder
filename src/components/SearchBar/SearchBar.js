import React from "react";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setSearchTerm } from "../../features/posts/postsSlice";

export function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={handleChange}
      />
      {/* <i className="fa-solid fa-magnifying-glass"></i> */}
    </div>
  );
}
