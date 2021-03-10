import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [state, setState] = useState({});
  useEffect(() => {
    axios
      .get("/")
      .then(({ data }) => {
        setState({ ...state, data });
        console.log(state);
      })
      .catch((err) => console.log(err));
  }, []);
  return <h1>{state.data}</h1>;
}
