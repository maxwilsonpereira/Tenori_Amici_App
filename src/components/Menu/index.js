// ********** MENU WITH ACTIVE LINKS IN IRINI APP!

import React, { useState, useEffect } from 'react';
// npm i react-useanimations
// https://useanimations.github.io/react-useanimations/?path=/story/animations--all
import UseAnimations from 'react-useanimations';
import menu3 from 'react-useanimations/lib/menu3';

import classes from './style.module.scss';

import HomeLinks from './links';
import VideoLinks from './linksVideosPage';
import PhotosLinks from './linksPhotosPage';

export default function Menu() {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const [menuClickable, setMenuClickable] = useState('iconOpenMenu');
  const [links, setLinks] = useState('');
  // POP() ******************************
  // Removes the last element from an array and returns
  // that valueto the caller.
  var urlPath = '';
  useEffect(() => {
    urlPath = window.location.href.split('/').pop();
    if (urlPath === 'videos') {
      setLinks(<VideoLinks closeMenu={closeMenuHandler} />);
    } else if (urlPath === 'photos') {
      setLinks(<PhotosLinks closeMenu={closeMenuHandler} />);
    } else {
      setLinks(<HomeLinks closeMenu={closeMenuHandler} />);
    }
  }, []);

  function toggleMenuHandler() {
    // 1 seconds pause to allow click again:
    setMenuIsOpened(!menuIsOpened);
    setMenuClickable('menuNotClickable');
    setTimeout(() => {
      setMenuClickable('iconOpenMenu');
    }, 1000);
  }

  // IN ORDER TO TRIGGER THE ICON EVEN when it will not be clicked:
  function closeMenuHandler() {
    var link = document.getElementById('menuBars');
    link.click();
  }

  return (
    <>
      {/* <button onClick={testing}>TESTING</button> */}
      {/* .iconOpenMenu path { stroke: #fff; } TO CHANGE ICONS COLOR */}
      <div className={classes[menuClickable]}>
        <UseAnimations
          id="menuBars"
          animation={menu3}
          reverse={menuIsOpened}
          // autoplay={true}
          // loop={true}
          // strokeColor={"#ffffff"}
          size={40}
          onClick={() => {
            // setMenuIsOpened(!menuIsOpened);
            toggleMenuHandler();
          }}
        />
      </div>

      {menuIsOpened ? (
        <div className={classes.container}>
          <div className={classes.openedMenu}>{links}</div>
        </div>
      ) : (
        <div className={classes.containerNoPointerEvents}>
          <div className={classes.closedMenu}>{links}</div>
        </div>
      )}
    </>
  );
}
