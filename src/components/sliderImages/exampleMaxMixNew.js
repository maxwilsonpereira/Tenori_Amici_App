import React from "react";

// npm i node-sass
import classes from "./example.module.scss";

export default function IntroImages() {
  return (
    <div id={classes.slider}>
      <figure>
        <div className={classes.backgroundImage1} />
        <div className={classes.backgroundImage2} />
        <div className={classes.backgroundImage3} />
        <div className={classes.backgroundImage1} />
      </figure>
    </div>
  );
}
