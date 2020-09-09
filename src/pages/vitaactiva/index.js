import React, { useState, useEffect } from "react";

import Modal from "./modal/modal";
import classes from "./style.module.css";
import classesInput from "./inputStyle.module.css";

import clickSound from "../../assets/sounds/click.mp3";
// import tempDates from "./tempDates";
import axios from "./axios";

export default function VitaActiva() {
  const [message, setMessage] = useState(null);
  const [password, setPassword] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const [allDates, setAllDates] = useState([]);

  // GET USERS
  // useEffect AS componentDidMount:
  useEffect(() => {
    getAllDates();
  }, []);

  useEffect(() => {
    // setShowModal(<Modal cancelModal={cancelModalHandler} />);

    const timer = setTimeout(() => {
      setMessage(null);
    }, 6000);
    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  function getAllDates() {
    axios
      .get("dates.json")
      .then((res) => {
        // console.log("Data from Firebase: ", res.data);
        const fetchedData = [];
        for (let key in res.data) {
          fetchedData.push({
            // NEXT 2 lines: fetchedData will receive
            // each data PLUS id
            ...res.data[key],
            id: key,
          });
        }
        setAllDates(fetchedData);
      })
      .catch((err) => {
        setMessage("Connection Error!");
      });
  }

  function addNewDate(event) {
    let audio = new Audio(clickSound);
    // PLAY CLICK, THEN EXECUTE FUNCTION:
    setTimeout(() => {
      if (password === "AlexVita.10") {
        setShowModal(<Modal cancelModal={cancelModalHandler} userCur="Alex" />);
      } else if (password === "Wilson.vita10") {
        setShowModal(<Modal cancelModal={cancelModalHandler} userCur="Max" />);
      } else {
        setMessage("Wrong Password!");
      }
    }, 200);
    audio.play();
  }

  function cancelModalHandler() {
    setShowModal(null);
  }

  return (
    <>
      {showModal}
      <div className={classes.greyLightBack}>
        <div className={classes.AppContainer}>
          <h1>CONCERTS TENORI AMICI - VITA ACTIVA</h1>
          <br />
          <div className={classes.dateBox}>
            {allDates.map((date, index) => (
              <h2 key={date.id}>
                {date.date}: {date.house} - {date.address} - {date.contact}
              </h2>
            ))}
          </div>
          <br />
          <div className={classesInput.vitaactiva}>
            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={classesInput.BtnInputAdd} onClick={addNewDate}>
              ADD NEW DATE
            </button>
            <h4 className={classes.message}>{message}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
