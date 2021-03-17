import React, { useState } from "react";
import axios from "axios";
import DashBoard from "./DashBoard.jsx";
import styles from "../../css/simplereturn.css";

export default function SimpleReturn({ info }) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const information = info.map((item, index) => (
    <div className={styles.itemContainer} key={index}>
      <h5>{item[0]}</h5>
      <p>{item[1]}</p>
    </div>
  ));

  return (
    <div className={styles.container}>
      <h5>Simple Return</h5>
      <div className={styles.infoContainer}>{information}</div>
    </div>
  );
}
