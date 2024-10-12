import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav className={styles.nav}>
    <NavLink
      className={({ isActive }) => (isActive ? `${styles.active}` : "")}
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? `${styles.active}` : "")}
      to="/contacts"
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
