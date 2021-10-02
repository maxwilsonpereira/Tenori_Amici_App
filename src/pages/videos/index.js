import React, { useState, useEffect } from 'react';

// npm install react-images
// https://github.com/jossmac/react-images
// https://github.com/jossmac/react-images/blob/v1/docs/pages/Home/GalleryExample.js
// import Carousel, { Modal, ModalGateway } from "react-images";

// npm install react-modal-video
// https://appleple.github.io/react-modal-video/
import ModalVideo from 'react-modal-video';
import './modalVideo.css';

import classes from './style.module.css';

import VideosThumbs from '../../assets/images/videos/allVideos';
import VideosIds from '../../assets/images/videos/allIds';
import VideosNames from '../../assets/images/videos/allNames';
import GoToYouTubeImg from '../../assets/images/videos/youtube.jpg';

export default function Videos(props) {
  // react-modal-video:
  const [modalVideoIsOpen, setModalVideoIsOpen] = useState(false);
  const [curVideoId, setCurVideoId] = useState('6sUkr0BXGDk');

  useEffect(() => {
    // SCROLL TO TOP ON PAGE LOAD:
    window.scrollTo(0, 0);
  }, []);

  function openModalVideo(index) {
    setCurVideoId(index);
    setModalVideoIsOpen(true);
  }

  return (
    <>
      {/* {props.menu} */}
      <ModalVideo
        channel="youtube"
        isOpen={modalVideoIsOpen}
        videoId={curVideoId}
        onClose={() => setModalVideoIsOpen(false)}
      />
      {props.menu}
      <div className={classes.gridPhotos}>
        {VideosThumbs.map((video, index) => (
          <div key={index} onClick={() => openModalVideo(VideosIds[index])}>
            <div className={classes.imgBox}>
              <img className={classes.images} src={video} alt="" />
              <h1 className={classes.textOverImg}>{VideosNames[index]}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.imgBox}>
        <a
          className={classes.hexLink}
          href="https://www.youtube.com/tenoriamici"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={classes.images} src={GoToYouTubeImg} alt="" />
        </a>
        <h1 className={classes.textOverImgYouTube}>More Videos On YouTube</h1>
      </div>
    </>
  );
}
