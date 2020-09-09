import React from "react";

import classes from "./style.module.css";

import img1 from "../../assets/images/slider/slide1.jpg";
import img2 from "../../assets/images/slider/slide2.jpg";
import img3 from "../../assets/images/slider/slide3.jpg";
import img4 from "../../assets/images/slider/slide4.jpg";
import img5 from "../../assets/images/slider/slide5.jpg";
import img6 from "../../assets/images/slider/slide6.jpg";
import img7 from "../../assets/images/slider/slide7.jpg";
import img8 from "../../assets/images/slider/slide8.jpg";
import img9 from "../../assets/images/slider/slide9.jpg";

export default function SliderImages() {
  return (
    <div id={classes.slider}>
      <figure>
        <img className={classes.zoomImg1} src={img1} />
        <img className={classes.zoomImg2} src={img2} />
        <img className={classes.zoomImg3} src={img3} />
        <img className={classes.zoomImg4} src={img4} />
        <img className={classes.zoomImg5} src={img5} />
        <img className={classes.zoomImg6} src={img6} />
        <img className={classes.zoomImg7} src={img7} />
        <img className={classes.zoomImg8} src={img8} />
        <img className={classes.zoomImg9} src={img9} />
        <img className={classes.zoomImg1} src={img1} />
      </figure>
    </div>
  );
}
