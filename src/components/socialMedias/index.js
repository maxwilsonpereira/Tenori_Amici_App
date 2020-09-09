import React from "react";

// npm install --save react-animate-on-scroll
// https://www.npmjs.com/package/react-animate-on-scroll
import ScrollAnimation from "react-animate-on-scroll";
// IMPORTANT: ***************************
// ADD "animate.min.css" file to ./utilities/animate.min.css
// and import into App.js
// If dos not work:
// ADD TO index.HTML <head> ... </head>: <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
// YOU CAN USE THE ANIMATIONS FROM:
// https://animate.style/
// EXAMPLES: fadeIn / zoomIn /zoomInLeft / fadeOutDown / pulse
// EXAMPLES:
// https://dbramwell.github.io/react-animate-on-scroll/

// npm i react-icons
// https://react-icons.github.io/react-icons/
// HOW TO FIND:
// Go to
// https://react-icons.github.io/react-icons/
// Choose the library on the left (Font Owesame) and CTRL+F
// to find the icon on the ocrresponding library.
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

import classes from "./style.module.css";

function SocialMedias(props) {
  return (
    <div className={classes.greyLightBack}>
      <div className={classes.AppContainer}>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2}>
          <h1 className={classes.fontH1}>{props.text}</h1>
          <br />
          <a href="https://www.youtube.com/tenoriamici" target="_blank">
            <span className={classes.youtube}>
              <FaYoutubeSquare size={50} />
            </span>
          </a>
          <a href="https://www.facebook.com/tenoriamici/" target="_blank">
            <span className={classes.facebook}>
              <FaFacebookSquare size={50} />
            </span>
          </a>
          <a href="https://www.instagram.com/tenoriamici/" target="_blank">
            <span className={classes.instagram}>
              <FaInstagramSquare size={50} />
            </span>
          </a>
        </ScrollAnimation>
      </div>
    </div>
  );
}
export default SocialMedias;
