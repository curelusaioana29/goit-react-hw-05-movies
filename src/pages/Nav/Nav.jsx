import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from 'components/Searchbar/SearchBar';
import styles from './Nav.module.css';

const Nav = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const location = useLocation();

  const toggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  const shouldShowSearchBar =
    isSearchBarVisible && location.pathname === '/movies';

  return (
    <nav className={styles.navContainer}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies" onClick={toggleSearchBar}>
            Movies
          </Link>
        </li>
      </ul>
      {shouldShowSearchBar && (
        <SearchBar onSubmit={query => console.log('Search query:', query)} />
      )}
    </nav>
  );
};

export default Nav;
