import React from "react";
// npm i react-router-hash-link
import { NavHashLink } from "react-router-hash-link";

import classes from "./style.module.css";

import Photos from "../../assets/images/photos.jpg";
import Videos from "../../assets/images/videos.jpg";

export default function Media() {
  return (
    <div className={classes.gridMedia}>
      <div
        id="mediaAnchor"
        style={{ position: "absolute", marginTop: "-40px" }}
      />
      <div>
        <div className={classes.imgBox}>
          <NavHashLink to="/videos">
            <img className={classes.medias} src={Videos} alt="" />
          </NavHashLink>
          <h1 className={classes.textOverImg}>Videos</h1>
        </div>
      </div>
      <div>
        <div className={classes.imgBox}>
          <NavHashLink to="/photos">
            <img className={classes.medias} src={Photos} alt="" />
          </NavHashLink>
          <h1 className={classes.textOverImg}>Photos</h1>
        </div>
      </div>
    </div>
  );
}
