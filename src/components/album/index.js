import React from 'react';

// npm i react-animate-on-scroll
import ScrollAnimation from 'react-animate-on-scroll';

import classes from './style.module.css';
import backAlbumImg from '../../assets/images/albumBackImg.jpg';

import ConAmore from '../../assets/images/conamore.jpg';
// import Google from "../../assets/images/mediaLogos/googleplay.png";
import Itunes from '../../assets/images/mediaLogos/itunes.png';
import Napster from '../../assets/images/mediaLogos/napster.png';
import Spotify from '../../assets/images/mediaLogos/spotify.png';

export default function Album() {
  return (
    <div
      className={classes.backImage}
      style={{ backgroundImage: `url(${backAlbumImg})` }}
    >
      <div
        id="albumAnchor"
        style={{ position: 'absolute', marginTop: '-40px' }}
      />
      <div className={classes.containerApp}>
        <div className={classes.gridAlbum}>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2}>
            <div>
              <img className={classes.imgAlbum} src={ConAmore} alt="" />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOnce={true}
            duration={1}
          >
            <div className={classes.backdivwhite}>
              <br />
              <h1
                className={[classes.conAmoreFont, classes.aligncenter].join(
                  ' '
                )}
              >
                CON AMORE
              </h1>
              <br />
              <h2
                className={[classes.conAmoreFontB, classes.aligncenter].join(
                  ' '
                )}
              >
                Album available online at:
              </h2>
              {/* <a
                href="https://play.google.com/store/music/album/Tenori_Amici_Con_Amore?id=Bcyqxqt5why3jay3dd5sq3cjv74"
                target="_blank"
              >
                <img className={classes.logosMedia} src={Google} />
              </a> */}
              <a
                href="https://music.apple.com/at/album/con-amore/1300412440?app=itunes&ign-mpt=uo%3D4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={classes.logosMedia} src={Itunes} alt="" />
              </a>
              <a
                href="https://at.napster.com/artist/tenori-amici/album/con-amore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={classes.logosMedia} src={Napster} alt="" />
              </a>
              <a
                href="https://open.spotify.com/album/1AkxhGb0UU1N0IxiS9BKPn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={classes.logosMedia} src={Spotify} alt="" />
              </a>
              <br />
              <br />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
