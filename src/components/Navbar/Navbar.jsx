// Include link-uri pentru "Home" și "Movies".
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'; // Presupunând că aveți un fișier de stiluri pentru Navbar

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.activeLink : '')}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? styles.activeLink : '')}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navbar;
