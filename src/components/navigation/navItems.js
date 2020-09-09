import React, { useState } from "react";

// npm i react-router-hash-link
// import { NavHashLink } from "react-router-hash-link";

// Smooth Scroll to Anchor:
// npm i react-anchor-link-smooth-scroll
// https://www.npmjs.com/package/react-anchor-link-smooth-scroll
import AnchorLink from "react-anchor-link-smooth-scroll";

import classes from "./style.module.css";

export default function NavigationItems(props) {
  return (
    <>
      <li className={classes.NavigationItem}>
        <AnchorLink href="#start" onClick={props.toggle}>
          Home
        </AnchorLink>
      </li>
      <li className={classes.NavigationItem}>
        <AnchorLink href="#albumAnchor" onClick={props.toggle}>
          Album
        </AnchorLink>
      </li>

      <li className={classes.NavigationItem}>
        <AnchorLink href="#tenorsAnchor" onClick={props.toggle}>
          Tenors
        </AnchorLink>
      </li>
      <li className={classes.NavigationItem}>
        <AnchorLink href="#mediaAnchor" onClick={props.toggle}>
          Media
        </AnchorLink>
      </li>
      <li className={classes.NavigationItem}>
        <AnchorLink href="#contactAnchor" onClick={props.toggle}>
          Contact
        </AnchorLink>
      </li>
    </>
  );
}
