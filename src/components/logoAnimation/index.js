import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
// Smooth Scroll to Anchor:
// npm i react-anchor-link-smooth-scroll
// https://www.npmjs.com/package/react-anchor-link-smooth-scroll
// import AnchorLink from "react-anchor-link-smooth-scroll";

import logoMain from "../../assets/images/logoMain.png";

// npm i react-icons
import { FiArrowDownCircle } from "react-icons/fi";

import classes from "./style.module.css";

export default function Home() {
  const [listener, setListener] = useState(null);
  const [status, setStatus] = useState("top");

  useEffect(() => {
    setListener(
      document.addEventListener("scroll", (e) => {
        let scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 10) {
          if (status !== "down") {
            setStatus("down");
          }
        } else {
          if (status !== "top") {
            setStatus("top");
          }
        }
      })
    );
  }, [listener, status]);

  return (
    <div className={classes.logoDiv}>
      <ScrollAnimation animateIn="fadeIn" initiallyVisible={true} duration={2}>
        {/* <div className={classes.centeredAligned}> */}
        <img className={classes.logoMain} src={logoMain} />
        <br />
        <br />

        {status === "top" ? (
          <span className={classes.fadeArrow}>
            <FiArrowDownCircle color="grey" size={40} />
          </span>
        ) : (
          <span className={classes.fadeArrow}>
            <FiArrowDownCircle color="black" size={40} />
          </span>
        )}

        {/* </div> */}
      </ScrollAnimation>
    </div>
  );
}
