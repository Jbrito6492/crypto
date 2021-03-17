import React, { useState } from "react";
import SymbolList from "./SymbolList.jsx";
import axios from "axios";
import styles from "../../css/beta.css";

export default function Beta(props) {
  const [tBeta, setTbeta] = useState({ ticker: null, beta: null });

  const handleChange = async (e) => {
    const ticker = e.target.value;
    const res = await axios.get("/beta", {
      params: { ticker: e.target.value },
    });
    const beta = res.data;
    setTbeta({ ...tBeta, ticker, beta });
  };
  return (
    <div className={styles.container}>
      <h5>Beta</h5>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={handleChange}
      >
        <SymbolList />
      </select>
      {tBeta.beta}
    </div>
  );
}
