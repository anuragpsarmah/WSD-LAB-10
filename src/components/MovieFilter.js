import React from "react";

const MovieFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div>
      <label>Filter by Category: </label>
      <select
        onChange={(e) => onCategoryChange(e.target.value)}
        value={selectedCategory}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MovieFilter;
