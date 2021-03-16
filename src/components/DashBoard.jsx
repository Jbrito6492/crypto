import React from "react";
import SymbolList from "./SymbolList.jsx";

export default function DashBoard(props) {
  return (
    <>
      <select className="form-select" aria-label="Default select example">
        <SymbolList />
      </select>
    </>
  );
}
