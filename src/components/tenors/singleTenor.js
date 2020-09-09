import React from "react";

import classes from "./style.module.css";

export default function SingleTenor(props) {
  return (
    <div className={classes.SingleTenor}>
      <div className={classes.AboutTenor}>
        <h2>{props.name}</h2>
      </div>
      {/* <div className={classes.imageBox}> */}
      <img className={classes.imageBio} src={props.image}></img>
      {/* </div> */}
    </div>
  );
}
