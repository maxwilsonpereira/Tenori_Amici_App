import React from "react";

import classes from "./style.module.css";
import AboutImg from "../../assets/images/about.jpg";
// npm i react-animate-on-scroll
import ScrollAnimation from "react-animate-on-scroll";

export default function About() {
  return (
    <div className={classes.AppContainer}>
      <div className={classes.GridContainer}>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={1}>
          <div className={classes.grida}>
            <br />
            {/* <br className={classes.MobileOnly} /> */}
            <h1>ABOUT</h1>
            <br />
            <h2>
              Tenori Amici is a classical multi-national crossover vocal group
              that brings to the audience the most famous classic and popular
              songs as well as unique beautiful and funny medleys developed by
              the group.
            </h2>
            <br />
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOnce={true}
          duration={1}
        >
          <div className={classes.gridb}>
            <img className={classes.aboutImg} src={AboutImg} />
          </div>
        </ScrollAnimation>
      </div>
      <br className={classes.MobileOnly} />
    </div>
  );
}
