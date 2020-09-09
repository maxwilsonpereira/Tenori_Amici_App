import React, { useState, useEffect } from "react";

// npm install react-images
// https://github.com/jossmac/react-images
// https://github.com/jossmac/react-images/blob/v1/docs/pages/Home/GalleryExample.js
import Carousel, { Modal, ModalGateway } from "react-images";
// NEW ONE (MAYBE TRY IN THE FUTURE):
// http://react-responsive-carousel.js.org/

import classes from "./style.module.css";

import Images from "../../assets/images/photos/allPhotos";

export default function Photos() {
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
