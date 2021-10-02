import React, { useState, useEffect } from "react";

// CAROUSEL: USE THE NEW ONE IN THE FUTURE:
// http://react-responsive-carousel.js.org/
// npm install react-images
// https://github.com/jossmac/react-images
// https://github.com/jossmac/react-images/blob/v1/docs/pages/Home/GalleryExample.js
import Carousel, { Modal, ModalGateway } from "react-images";
// ********* MUST DO TO USE CAROUSEL:
// 1- ADD TO GLOBAL.CSS: img { max-height: 100vh !important; }
// TO MAKE IMGS 100% VISIBLE WHEN CLICKED!
// 2- CORRECT ESC PROBLEM when image view ERROR:
// node_modules\react-images\dist\react-images.es.js
// COMMENT THIS: // var caption = currentView.caption;
// AND ADD THIS: var caption =  "";

import classes from "./style.module.css";

import Images from "../../assets/images/photos/allPhotos";

export default function Photos(props) {
  const [imagesArray, setImagesArray] = useState([]);
  const [indexCurrent, setIndexCurrent] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // SCROLL TO TOP ON PAGE LOAD:
    window.scrollTo(0, 0);
  }, []);

  function toggleModal(index) {
    setIndexCurrent(index);

    let photosAux = [];
    for (let i = 0; i < Images.length; i++) {
      photosAux.push({ source: Images[i][0] });
    }
    setImagesArray(photosAux);
    setModalIsOpen(!modalIsOpen);
  }
  return (
    <>
      {props.menu}
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={toggleModal}>
            <Carousel currentIndex={indexCurrent} views={imagesArray} />
          </Modal>
        ) : null}
      </ModalGateway>
      <div className={classes.gridPhotos}>
        {Images.map((img, index) => (
          <div key={index} onClick={() => toggleModal(index)}>
            {/* img[1] = thumbnail: */}
            <div className={classes.imgBox}>
              <img
                // classes[img[2]] TO DON'T SHOW DEPENDING ON GRID SIZE:
                className={[
                  classes.images,
                  classes[img[2]],
                  classes[img[3]],
                ].join(" ")}
                src={img[1]}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
