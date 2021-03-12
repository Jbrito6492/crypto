import React, { useState, useEffect } from "react";
import DisplayHook from "../hooks/Display";
import Navbar from "./Navbar.jsx";
import NavItem from "./NavItem.jsx";
import TickerInfo from "./TickerInfo.jsx";
import axios from "axios";
import styles from "../../css/display.css";

export default function Display(props) {
  const [info, setInfo] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { title, setTitle, getLogReturns, getSimpReturns } = DisplayHook();

  useEffect(() => {
    loadContent(title);
  }, [title]);

  const loadContent = async (title) => {
    let res;
    setHasLoaded(false);
    if (title === "simple return") {
      setTitle("simple return");
      res = await axios.get("/lreturn");
    } else {
      setTitle("log return");
      res = await axios.get("/lreturn");
    }
    setTitle(title);
    setInfo(res.data);
    setHasLoaded(true);
  };

  const toggleMenu = (e) => {
    setIsOpen(!isOpen);
  };

  const navTitle = title === "simple return" ? "log return" : "simple return";

  const information = info.map((item, index) => (
    <div className={styles.itemContainer} key={index}>
      <h5>{item[0]}</h5>
      <p>{item[1]}</p>
    </div>
  ));

  return (
    <>
      <div>
        {hasLoaded && (
          <>
            <Navbar title={title} toggleMenu={toggleMenu} isOpen={isOpen}>
              <NavItem title={navTitle} loadContent={loadContent} />
            </Navbar>
            <div className={styles.infoContainer}>{information}</div>
          </>
        )}
      </div>
    </>
  );
}
