import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getNavLinkClass = ({
    isActive,
  }: {
    isActive: boolean;
  }) => {
    return `${styles.navLink} ${isActive ? styles.active : ""}`;
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navbar}`}>
        <NavLink
          to="/"
          className={styles.logo}
          onClick={closeMenu}
          aria-label="Go to homepage"
        >
          <span className={styles.logoMark}>CR</span>

          <span className={styles.logoText}>
            <strong>Car Rental</strong>
            <small>Explore Crete freely</small>
          </span>
        </NavLink>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`${styles.navigation} ${
            isMenuOpen ? styles.navigationOpen : ""
          }`}
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/fleet"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            Fleet
          </NavLink>

          <NavLink
            to="/about"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <NavLink
            to="/booking"
            className={styles.bookingButton}
            onClick={closeMenu}
          >
            Book now
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;