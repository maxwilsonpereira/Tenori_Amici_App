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
import traviata3 from '../../assets/sounds/traviata3.mp3';
import traviata4 from '../../assets/sounds/traviata4.mp3';
import traviata5 from '../../assets/sounds/traviata5.mp3';

const audios = [
  new Audio(traviata1),
  new Audio(traviata2),
  new Audio(traviata3),
  new Audio(traviata4),
  new Audio(traviata5),
];

export default function HomeLinks(props) {
  function playSound(num) {
    for (let i = 1; i < 5; i++) audios[i].pause();
    audios[num].play();
  }

  return (
    <div className={classes.textDiv}>
      <AnchorLink href="#start">
        <h3 onMouseOver={() => playSound(0)} onClick={() => props.closeMenu()}>
          Home
        </h3>
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
