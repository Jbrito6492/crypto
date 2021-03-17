import React from "react";
import SimpleReturn from "./SimpleReturn.jsx";
import Beta from "./Beta.jsx";
import styles from "../../css/dashboard.css";

export default function DashBoard({ info }) {
  return (
    <div className={styles.container}>
      <SimpleReturn info={info} />
      <Beta />
    </div>
  );
}
