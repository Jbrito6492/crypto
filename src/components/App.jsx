import React, { useState, useEffect } from "react";
import Display from "./Display.jsx";
import axios from "axios";

export default function App() {
  const [state, setState] = useState({ data: [], hasLoaded: false });
  const { hasLoaded, data } = state;

  useEffect(() => {
    axios
      .get("/home")
      .then(({ data }) => {
        setState({ ...state, data, hasLoaded: true });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {hasLoaded && (
        <>
          <h1>Tracker</h1>
          <Display data={data} />
        </>
      )}
    </>
  );
}
