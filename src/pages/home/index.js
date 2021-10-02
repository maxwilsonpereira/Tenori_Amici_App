import React, { useEffect, useState } from 'react';

import classes from './style.module.css';

import MessageSection from '../../components/messageSection';
import LogoAnimation from '../../components/logoAnimation';
// import About from "../../components/about";
import Awards from '../../components/awards';
import SliderImages from '../../components/sliderImages';
import VideoHome from '../../components/videoHome';
import Album from '../../components/album';
import SocialMedias from '../../components/socialMedias';
import Tenors from '../../components/tenors';
import Media from '../../components/media';
import Contato from '../../components/contato';
// import homeImg from '../../assets/images/homeImg.jpg';
// import audioOverture from '../../assets/sounds/overture.mp3';

export default function Fotografia(props) {
  useEffect(() => {
    // SCROLL TO TOP ON PAGE LOAD:
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {props.menu}

      {/* ANCHOR self-closing DIV: */}
      <div id="start" style={{ position: 'absolute', top: '0px' }} />
      <LogoAnimation />
      {/* DESKTOP ONLY with SCROLL CHANGE BRIGHTNESS: */}
      <div
        className={[classes.MobileDontShow, classes.backgroundOnScroll].join(
          ' '
        )}
      >
        <div
          className={classes.mainIgmDiv}
          // style={{ backgroundImage: `url(${homeImg})` }}
        />
      </div>
      {/* MOBILE ONLY: */}
      <div className={[classes.MobileOnly, classes.backgroundMobile].join(' ')}>
        <div
          className={classes.mainIgmDiv}
          // style={{ backgroundImage: `url(${homeImg})` }}
        />
      </div>
      {/* <div id="firstPart" style={{ position: 'absolute', top: '0px' }} /> */}
      <MessageSection
        background="greyLightBack"
        // text='"One doesn’t stop seeing. One doesn’t stop framing. It doesn’t turn off and turn on. It’s on all the time."'
        text="Welcome to the Enchanted World of Tenori Amici!"
        text2="Classic Music / Pop Songs / Christmas Songs / World Songs / Sacred Songs and More"
      />
      {/* <About /> */}
      <Awards />
      <VideoHome />
      <SliderImages />
      <MessageSection
        background="greyLightBack"
        // text='"One doesn’t stop seeing. One doesn’t stop framing. It doesn’t turn off and turn on. It’s on all the time."'
        text="The world's most famous songs!"
        text2="Nessun dorma / Dein ist mein ganzes Herz / O sole mio / My way / Besame mucho / Lady in red / Aquarela do Brasil"
      />
      <Album />
      <MessageSection
        cutMisteriousMargin="cutMisteriousMargin"
        background="greyLightBack"
        // text='"One doesn’t stop seeing. One doesn’t stop framing. It doesn’t turn off and turn on. It’s on all the time."'
        text="Internation Tenors"
        text2="Brazil / Croatia / Mexico / Iran / Germany"
      />

      <Tenors />
      <MessageSection
        cutMisteriousMargin="cutMisteriousMargin"
        background="greyLightBack"
        // text='"One doesn’t stop seeing. One doesn’t stop framing. It doesn’t turn off and turn on. It’s on all the time."'
        text="Tenori Amici no Brasil!"
        text2="Preparem-se para receber os Tenori Amici no Brasil em 2021!"
      />
      <Media />
      <SocialMedias text="Follow the Tenori Amici on:" />
      <Contato />
    </>
  );
}
