import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  const handleTitleChange = (e) => {
    setFilterTitle(e.target.value);
    onFilterChange({ title: e.target.value, rating: filterRating });
  };

  const handleRatingChange = (e) => {
    setFilterRating(e.target.value);
    onFilterChange({ title: filterTitle, rating: e.target.value });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filterTitle}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filterRating}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
