import React from "react";

export default function Display({ data }) {
  console.log(data);
  const information = data.map((obj, index) => {
    let ticker;
    for (const t_key in obj) {
      return (
        <div key={index}>
          <h5>{t_key}</h5>
          <p>{obj[t_key]}</p>
        </div>
      );
    }
  });

  return <div>{information}</div>;
}
