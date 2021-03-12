import React from "react";
import styles from "../../css/navbar.css";

export default function NavItem({ title, loadContent }) {
  return (
    <li className={styles.navItem}>
      <h4 onClick={() => loadContent(title)}>{title}</h4>
    </li>
  );
}
