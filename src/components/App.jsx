import React, { useState, useEffect } from "react";
import Display from "./Display.jsx";
import axios from "axios";
import styles from "../../css/app.css";

export default function App() {
  const [state, setState] = useState({ data: [], hasLoaded: false });
  const { hasLoaded, data } = state;

  useEffect(() => {
    axios
      .get("/sreturn")
      .then(({ data }) => {
        setState({ ...state, data, hasLoaded: true });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1>Crypto Tracker</h1>
        {hasLoaded && <Display data={data} />}
      </div>
    </>
  );
}
