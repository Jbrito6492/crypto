import React from "react";
import { FaAngleDown } from "react-icons/fa";
import styles from "../../css/navbar.css";

export default function Navbar({ title, toggleMenu, isOpen, children }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.titleContainer}>
        <h4>{title}</h4>
        <FaAngleDown onClick={toggleMenu} />
      </div>
      {isOpen && <ul className={styles.navbarList}>{children}</ul>}
    </nav>
  );
}
