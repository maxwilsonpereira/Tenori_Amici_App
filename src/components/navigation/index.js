import React, { useEffect, useState } from "react";
// npm i react-redux
import { connect } from "react-redux";

import * as actionTypes from "../../store/actions/actionsIndex";

import classes from "./style.module.css";

import NavigationItems from "./navItems";
import SideDrawer from "./sideDrawer/sideDrawer";
// npm i react-icons
// https://react-icons.github.io/react-icons/
import { FaBars } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";

function Navigation(props) {
  const [showSideNav, setShowSideNav] = useState("");
  const [mobileFavicon, setMobileFavicon] = useState(null);

  // On Scroll Changing:
  const [listener, setListener] = useState(null);
  const [status, setStatus] = useState("top");

  useEffect(() => {
    setListener(
      document.addEventListener("scroll", (e) => {
        let scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 120) {
          if (status !== "auxWord") {
            setStatus("auxWord");
          }
        } else {
          if (status !== "top") {
            setStatus("top");
          }
        }
      })
    );
  }, [listener, status]);

  useEffect(() => {
    if (props.toggleSideDrawer) {
      setShowSideNav(
        <>
          <SideDrawer
            // logoutHandler={logoutHandler}
            toggle={toggleHandle}
            classAux="SideDrawerIn"
          />
        </>
      );
      setMobileFavicon(
        <FaRegTimesCircle
          onClick={toggleHandle}
          className={classes.BarsToX}
          size={40}
        />
      );
    } else {
      setShowSideNav(
        <>
          <SideDrawer
            // logoutHandler={logoutHandler}
            toggle={toggleHandle}
            classAux="SideDrawerOut"
          />
        </>
      );
      setMobileFavicon(
        <FaBars onClick={toggleHandle} className={classes.Bars} size={35} />
      );
      //   setShowSideNav("");
    }
  }, [props.toggleSideDrawer]);

  function toggleHandle() {
    props.onToggleSideDrawer();
  }

  return (
    <>
      <div className={classes.NavMobile}>{showSideNav}</div>
      <div
        style={{
          backgroundColor: status === "top" ? "transparent" : "white",
        }}
        className={classes.backgroundOnScroll}
      />
      {mobileFavicon}
      <div
        style={{
          opacity: status === "top" ? "0" : "1",
        }}
        className={classes.NavContainer}
      >
        <ul className={classes.NavigationItems}>
          {status === "top" ? null : <NavigationItems />}
        </ul>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    toggleSideDrawer: state.global.toggleSideDrawer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleSideDrawer: () => dispatch(actionTypes.toggleSideDrawer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
