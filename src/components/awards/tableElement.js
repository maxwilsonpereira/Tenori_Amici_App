import React from "react";

import classes from "./style.module.css";
import { FiStar } from "react-icons/fi";

export default function Element(props) {
  return (
    <>
      <div className={classes.gridAwards}>
        <div className={classes.itemA}>
          <FiStar className={classes.starClass} size={20} color="#ae6e3d" />
        </div>
        <div className={classes.itemB}>{props.text}</div>
        <div className={classes.itemC}>
          <FiStar className={classes.starClass} size={20} color="#ae6e3d" />
        </div>
      </div>
    </>
  );
}
