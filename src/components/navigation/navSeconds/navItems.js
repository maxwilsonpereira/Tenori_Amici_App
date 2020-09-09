import React, { useState } from "react";

// npm i react-router-hash-link
import { NavHashLink } from "react-router-hash-link";

import classes from "./style.module.css";

export default function NavigationItems(props) {
  return (
    <>
      <li className={classes.NavigationItem}>
        <NavHashLink
          to="/"
          exact
          activeClassName={classes.active}
          // onClick is used on SideDrawer:
          onClick={props.toggle}
        >
          Home
        </NavHashLink>
      </li>
      <li className={classes.NavigationItem}>
        <NavHashLink
          to="/videos"
          exact
          activeClassName={classes.active}
          // onClick is used on SideDrawer:
          onClick={props.toggle}
        >
          Videos
        </NavHashLink>
      </li>
      <li className={classes.NavigationItem}>
        <NavHashLink
          to="/photos"
          exact
          activeClassName={classes.active}
          // onClick is used on SideDrawer:
          onClick={props.toggle}
        >
          Photos
        </NavHashLink>
      </li>
    </>
  );
}
