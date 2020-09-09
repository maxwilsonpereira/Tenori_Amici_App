import React, { useState, useEffect } from "react";

// npm install react-images
// https://github.com/jossmac/react-images
// https://github.com/jossmac/react-images/blob/v1/docs/pages/Home/GalleryExample.js
// import Carousel, { Modal, ModalGateway } from "react-images";

// npm install react-modal-video
// https://appleple.github.io/react-modal-video/
import ModalVideo from "react-modal-video";
import "./modalVideo.css";

import classes from "./style.module.css";

import VideosThumbs from "../../assets/images/videos/allVideos";
import VideosIds from "../../assets/images/videos/allIds";
import VideosNames from "../../assets/images/videos/allNames";

export default function Photos() {
  // react-modal-video:
  const [modalVideoIsOpen, setModalVideoIsOpen] = useState(false);
  const [curVideoId, setCurVideoId] = useState("6sUkr0BXGDk");

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
      <ModalVideo
        channel="youtube"
        isOpen={modalVideoIsOpen}
        videoId={curVideoId}
        onClose={() => setModalVideoIsOpen(false)}
      />
      <div className={classes.gridPhotos}>
        {VideosThumbs.map((video, index) => (
          <div key={index} onClick={() => openModalVideo(VideosIds[index])}>
            <div className={classes.imgBox}>
              <img className={classes.images} src={video} />
              <h1 className={classes.textOverImg}>{VideosNames[index]}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
