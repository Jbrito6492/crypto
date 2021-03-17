import React, { useState, useEffect } from "react";
import DashBoard from "./DashBoard.jsx";
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
        {hasLoaded && (
          <>
            <h1>Crypto Tracker</h1>
            <DashBoard info={data} />
          </>
        )}
      </div>
    </>
  );
}
