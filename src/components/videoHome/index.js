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

import classes from "./style.module.css";

function VideoHome() {
  return (
    <div className={classes.greyLightBack}>
      <div className={classes.AppContainer}>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2}>
          <h1>Tenori Amici in Austria</h1>
        </ScrollAnimation>
        <br />
        <iframe
          id={classes.videoHome}
          frameBorder="0"
          src="https://www.youtube.com/embed/sxCFtz4kypA?rel=0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
export default VideoHome;
