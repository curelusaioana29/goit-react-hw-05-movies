import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleSearch = e => {
    e.preventDefault();
    onSubmit({ query });
    setQuery('');
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
