import { NavLink } from "react-router-dom";
import styles from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink className={styles.navLink} to="/">
          Home
        </NavLink>
        <NavLink className={styles.navLink} to="/register">
          Register
        </NavLink>
        <NavLink className={styles.navLink} to="/login">
          Login
        </NavLink>
        <NavLink className={styles.navLink} to="/contacts">
          Contacts
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
