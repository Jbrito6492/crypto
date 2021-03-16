import React, { useState } from "react";
import axios from "axios";
import styles from "../../css/display.css";

export default function Display({ title, info }) {
  const [hasLoaded, setHasLoaded] = useState(false);
  console.log(info);
  const information = info.map((item, index) => (
    <div className={styles.itemContainer} key={index}>
      <h5>{item[0]}</h5>
      <p>{item[1]}</p>
    </div>
  ));

  return (
    <>
      <h5>{title}</h5>
      <div className={styles.infoContainer}>{information}</div>
    </>
  );
}
