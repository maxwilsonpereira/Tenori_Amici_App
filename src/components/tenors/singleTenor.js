import React from "react";

import classes from "./style.module.css";

export default function SingleTenor({ name, image }) {
  return (
    <div className={classes.SingleTenor}>
      <div className={classes.AboutTenor}>
        <h2>{name}</h2>
      </div>
      {/* <div className={classes.imageBox}> */}
      <img className={classes.imageBio} src={image} alt=""></img>
      {/* </div> */}
    </div>
  );
}
