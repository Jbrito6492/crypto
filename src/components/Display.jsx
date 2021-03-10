import React from "react";
import styles from "../../css/display.css";

export default function Display({ data, title }) {
  console.log(data);
  const information = data.map((obj, index) => {
    let ticker;
    for (const t_key in obj) {
      return (
        <div className={styles.itemContainer} key={index}>
          <h5>{t_key}</h5>
          <p>{obj[t_key]}</p>
        </div>
      );
    }
  });

  return (
    <>
      <div>
        <h4>{title}</h4>
        {information}
      </div>
    </>
  );
}
