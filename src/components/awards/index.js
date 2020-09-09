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

// import { FiStar } from "react-icons/fi";

import classes from "./style.module.css";
import backImg from "../../assets/images/awardsBack.jpg";

import Element from "./tableElement";

function Awards() {
  const backgroundImg = { backgroundImage: `url(${backImg})` };

  return (
    <div className={classes.backgroundImg} style={backgroundImg}>
      <div className={classes.AppContainer}>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={3}>
          {/* <h1>{props.text}</h1> */}
          <h2>
            <Element text="Winners of the U-Bahn-Stars 2017 State of Vienna Competition" />
            <Element
              text="Concert on the main stage of the Inauguration of the U1 Oberlaa
              Subway Station 2017"
            />
            <Element
              text="Performed on Bezirksfest Wir Sind Wien 2017 and Bezirksvorstehung
              Donaustadt 2018"
            />
            <Element text="Concert on the famous Park Wiener Prater in 2018" />
            <Element
              text="Performed for Cardinal Christoph Schönborn and 48er-Tandler (Stadt
              Wien)"
            />
            <Element
              text="Signed contract with record label “Biscoito Fino” for their first
              album “Con Amore”"
            />
          </h2>
        </ScrollAnimation>
      </div>
    </div>
  );
}
export default Awards;
