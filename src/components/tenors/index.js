import React from "react";
// npm install --save react-animate-on-scroll
// https://www.npmjs.com/package/react-animate-on-scroll
// import ScrollAnimation from "react-animate-on-scroll";

// CAROUSEL:
// https://www.npmjs.com/package/react-multi-carousel
// npm install react-multi-carousel --save

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import classes from "./style.module.css";

import SingleTenor from "./singleTenor";
import Max from "../../assets/images/tenors/max.jpg";
import Ali from "../../assets/images/tenors/ali.jpg";
import Luka from "../../assets/images/tenors/luka.jpg";
import Ara from "../../assets/images/tenors/ara.jpg";
import Alex from "../../assets/images/tenors/alex.jpg";

export default function Tenors() {
  const responsive = {
    breakpointA: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1500 },
      items: 5,
    },
    breakpointB: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1500, min: 1200 },
      items: 4,
    },
    breakpointC: {
      breakpoint: { max: 1200, min: 900 },
      items: 3,
      // slidesToSlide: 3, optional, default to 1.
      //   slidesToSlide: 3,
    },
    breakpointD: {
      breakpoint: { max: 900, min: 600 },
      items: 2,
      //   slidesToSlide: 2,
    },
    breakpointE: {
      breakpoint: { max: 600, min: 200 },
      items: 1,
      //   slidesToSlide: 1,
    },
  };

  return (
    <div className={classes.AppContainer}>
      <div
        id="tenorsAnchor"
        style={{ position: "absolute", marginTop: "-40px" }}
      />
      {/* <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2}> */}
      {/* <h1>The Tenors</h1> */}
      {/* </ScrollAnimation> */}
      {/* <br /> */}
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        // ssr={true} means to render carousel on server-side.
        // ssr={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .5"
        customTransition="0.5s ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        // focusOnSelect={true}
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        removeArrowOnDeviceType="breakpointA"
        // removeArrowOnDeviceType={["breakpointA", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <SingleTenor
            image={Max}
            name="MAX WILSON PEREIRA"
            country="Brazil"
            bio="From Rio de Janeiro, Max Wilson Pereira has come to Vienna after some fame in Brazil as an opera/crossover singer, actor of Telenovelas and vocal coach."
          />
        </div>
        <div>
          <SingleTenor
            image={Ali}
            name="ALI MAGOMEDOV"
            country="RUSSIA"
            bio="With strong Russian temperament, very high values and high C’s on the pocket, the Divo Tenor Ali Magomedov has made a major career in Russia and Europe."
          />
        </div>
        <div>
          <SingleTenor
            image={Luka}
            name="LUKA GUDELJ"
            country="CROATIA"
            bio='Our Croatian tenor has a master’s degree in Opera from a Viennese University and was awarded with the "Vecernjakova domovnika", a prize for the most popular artist living outside Croatia.'
          />
        </div>
        <div>
          <SingleTenor
            image={Ara}
            name="ARA KARAPETIAN"
            country="IRAN"
            bio="Famous as a singer in Iran, Ara Karapetian is now living in the United States, where he is making a major career as a soloist. Ara is still an honorable member of the Tenori Amici for international projects."
          />
        </div>
        <div>
          <SingleTenor
            image={Alex}
            name="ALEXANDER HELDT"
            country="GERMANY"
            bio="After studying at Mozarteum in Salzburg, Alex started his singing career in Vienna. Beside Opera and Operetta, Alex is a skilled Pop- and Jazzsinger, what is very suitable for the Tenori Amici."
          />
        </div>
      </Carousel>
    </div>
  );
}
