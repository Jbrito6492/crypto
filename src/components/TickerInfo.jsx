import React from "react";
import styles from "../../css/display.css";

export default function TickerInfo({ data }) {
  const content = data.map((item, index) => (
    <div className={styles.itemContainer} key={index}>
      <h5>{item[0]}</h5>
      <p>{item[1]}</p>
    </div>
  ));
  return content;
}
