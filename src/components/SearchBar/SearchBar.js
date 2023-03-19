import React from "react";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { useState } from "react";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}
