import React from "react";
// npm install --save react-animate-on-scroll
// https://www.npmjs.com/package/react-animate-on-scroll
import ScrollAnimation from "react-animate-on-scroll";

import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
// HOW TO FIND:
// Go to
// https://react-icons.github.io/react-icons/
// Choose the library on the left (Font Owesame) and CTRL+F
// to find the icon on the ocrresponding library.

import classes from "./style.module.css";

import SingleTenor from "./singleTenor";
import Max from "../../assets/images/tenors/max.jpg";
import Ali from "../../assets/images/tenors/ali.jpg";
import Luka from "../../assets/images/tenors/luka.jpg";
import Ara from "../../assets/images/tenors/ara.jpg";
import Alex from "../../assets/images/tenors/alex.jpg";

export default function Tenors() {
  return (
    <div className={classes.AppContainer}>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2}>
        <h1>The Tenors</h1>
      </ScrollAnimation>
      <br />
      <div className={classes.GridBio}>
        <FiArrowLeftCircle
          className={classes.iconArrowLeft}
          color="grey"
          size={40}
        />
        <FiArrowRightCircle
          className={classes.iconArrowRight}
          color="grey"
          size={40}
        />
        <SingleTenor
          image={Max}
          name="MAX WILSON PEREIRA"
          country="Brazil"
          bio="From Rio de Janeiro, Max Wilson Pereira has come to Vienna after some fame in Brazil as an opera/crossover singer, actor of Telenovelas and vocal coach."
        />
        <SingleTenor
          image={Ali}
          name="ALI MAGOMEDOV"
          country="RUSSIA"
          bio="With strong Russian temperament, very high values and high C’s on the pocket, the Divo Tenor Ali Magomedov has made a major career in Russia and Europe."
        />
        <SingleTenor
          image={Luka}
          name="LUKA GUDELJ"
          country="CROATIA"
          bio='Our Croatian tenor has a master’s degree in Opera from a Viennese University and was awarded with the "Vecernjakova domovnika", a prize for the most popular artist living outside Croatia.'
        />
        <SingleTenor
          image={Ara}
          name="ARA KARAPETIAN"
          country="IRAN"
          bio="Famous as a singer in Iran, Ara Karapetian is now living in the United States, where he is making a major career as a soloist. Ara is still an honorable member of the Tenori Amici for international projects."
        />
        <SingleTenor
          image={Alex}
          name="ALEXANDER HELDT"
          country="GERMANY"
          bio="After studying at Mozarteum in Salzburg, Alex started his singing career in Vienna. Beside Opera and Operetta, Alex is a skilled Pop- and Jazzsinger, what is very suitable for the Tenori Amici."
        />
      </div>
    </div>
  );
}
