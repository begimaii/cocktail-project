import React, { useState } from "react";

export default function Header({ handleSearch }) {
  const [search, setSearch] = useState("");
  const [searchEnabled, setSearchEnabled] = useState(false);
  const handleInputChange = (e) => {
    setSearch(e.target.value);
    if (!searchEnabled) {
      handleSearch(e.target.value);
    }
  };
  const handleSearchClick = () => {
    if (searchEnabled) {
      handleSearch(search);
    }
  };
  return (
    <header className="header">
      <h1>Cocktail Project</h1>
      <div>
        <div className="search-option">
          {" "}
          <p>Use search button? </p>
          <input
            id="yes"
            type="radio"
            name="searchOption"
            onChange={() => setSearchEnabled(true)}
          />
          <label htmlFor="yes">Yes</label>
          <input
            id="no"
            type="radio"
            name="searchOption"
            onChange={() => setSearchEnabled(false)}
          />
          <label htmlFor="no">No</label>
        </div>
        <div className="search-wrapper">
          <input
            value={search}
            id="search"
            type="text"
            placeholder="Search a cocktail..."
            onChange={handleInputChange}
          />

          <button onClick={handleSearchClick} id="search-btn">
            Search
          </button>
        </div>
      </div>
    </header>
  );
}
