import React, { useState } from "react";
import axios from "axios";

export default function Display() {
  const [title, setTitle] = useState("simple return")

  const getLogReturns = () => {
    axios.get("/lreturn").then(({ data }) => {
      setTitle("log return");
      return data;
    })
      .catch(err => console.log(err))
  }

  const getSimpReturns = () => {
    axios.get("/sreturn").then(({ data }) => {
      setTitle("simple return");
      return data;
    })
      .catch(err => console.log(err))
  }

  return { title, getLogReturns, getSimpReturns, setTitle }
}