// ********** MENU WITH ACTIVE LINKS IN IRINI APP!

import React from 'react';

// Smooth Scroll to Anchor:
// npm i react-anchor-link-smooth-scroll
// https://www.npmjs.com/package/react-anchor-link-smooth-scroll
import AnchorLink from 'react-anchor-link-smooth-scroll';

// npm install --save react-router-dom
// import { Link } from "react-router-dom";
// https://react-icons.github.io/react-icons/
// npm install react-icons --save
import { FaYoutubeSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

import classes from './style.module.scss';

import traviata1 from '../../assets/sounds/traviata1.mp3';
import traviata2 from '../../assets/sounds/traviata2.mp3';
const audio1 = new Audio(traviata1);
const audio2 = new Audio(traviata1);
const audio3 = new Audio(traviata1);
const audio4 = new Audio(traviata2);

export default function HomeLinks(props) {
  // let URL = "";
  // useEffect(() => {
  //   URL = window.location.href;
  //   console.log("URL: ", URL);
  // }, []);
  function playSound(num) {
    if (num === 1) {
      audio2.pause();
      audio2.currentTime = 0;
      audio3.pause();
      audio3.currentTime = 0;
      audio4.pause();
      audio4.currentTime = 0;
      audio1.play();
    } else if (num === 2) {
      audio1.pause();
      audio1.currentTime = 0;
      audio3.pause();
      audio3.currentTime = 0;
      audio4.pause();
      audio4.currentTime = 0;
      audio2.play();
    } else if (num === 3) {
      audio1.pause();
      audio1.currentTime = 0;
      audio2.pause();
      audio2.currentTime = 0;
      audio4.pause();
      audio4.currentTime = 0;
      audio3.play();
    } else if (num === 4) {
      audio1.pause();
      audio1.currentTime = 0;
      audio2.pause();
      audio2.currentTime = 0;
      audio3.pause();
      audio3.currentTime = 0;
      audio4.play();
    }
  }

  return (
    <div className={classes.textDiv}>
      <AnchorLink href="#start">
        <h3 onClick={() => props.closeMenu()}>Home</h3>
      </AnchorLink>
      <br />
      <AnchorLink href="#albumAnchor">
        <h1 onMouseOver={() => playSound(1)} onClick={() => props.closeMenu()}>
          Album
        </h1>
      </AnchorLink>
      <br />
      <AnchorLink href="#tenorsAnchor">
        <h1 onMouseOver={() => playSound(2)} onClick={() => props.closeMenu()}>
          Tenors
        </h1>
      </AnchorLink>
      <br />
      <AnchorLink href="#mediaAnchor">
        <h1 onMouseOver={() => playSound(3)} onClick={() => props.closeMenu()}>
          Media
        </h1>
      </AnchorLink>
      <br />
      <AnchorLink href="#contactAnchor">
        <h1 onMouseOver={() => playSound(4)} onClick={() => props.closeMenu()}>
          Contact
        </h1>
      </AnchorLink>
      <br className={classes.dontShowSmallHeight} />
      <br className={classes.dontShowSmallHeight} />
      <br />
      <br />
      <br />
      <a
        href="https://www.youtube.com/tenoriamici"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutubeSquare className={classes.youtube} size={50} />
      </a>
      <a
        href="https://www.facebook.com/TENORIAMICI/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare className={classes.facebook} size={50} />
      </a>
      <a
        href="https://www.instagram.com/tenoriamici/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagramSquare className={classes.instagram} size={50} />
      </a>
    </div>
  );
}
