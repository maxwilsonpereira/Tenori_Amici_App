import React, { useState, useEffect } from "react";
import classesModal from "./style.module.css";
import classesInput from "../inputStyle.module.css";
import classes from "../style.module.css";
import axios from "../axios";

export default function Modal(props) {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [klavier, setKlavier] = useState(false);
  const [messageToUser, setMessageToUser] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageToUser(null);
    }, 6000);
    return () => {
      clearTimeout(timer);
    };
  }, [messageToUser]);

  // ADD NEW DATE:
  function addNewDateHandler(e) {
    e.preventDefault();

    if (
      date.length < 1 ||
      name.length < 3 ||
      address.length < 3 ||
      contact.length < 3
    ) {
      setMessageToUser("Minimum 3 characters for each field!");
      return;
    }
    // Firebase will generate user.id (Like this! .id, NOT ._id!)
    const newDate = {
      date: date,
      house: name,
      address: address,
      contact: contact,
      klavier: true,
    };
    axios
      .post("/dates.json", newDate)
      .then((res) => {
        setMessageToUser("New date added successfully!");
      })
      .catch((err) => {
        setMessageToUser("Error! Contact Max! hehehe");
      });
  }

  return (
    <div className={classesModal.modal}>
      <div className={classes.AppContainer}>
        <h1>Insert New Date:</h1>
        <br />
        <h2>DATE:</h2>
        <input
          type="date"
          placeholder="DATE"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <h2>HOUSE:</h2>
        <input
          type="text"
          placeholder="HOUSE"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h2>ADDRESS:</h2>
        <input
          type="text"
          placeholder="ADDRESS"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <h2>CONTACT:</h2>
        <input
          type="text"
          placeholder="CONTACT"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <br /> <br />
        <button
          className={classesInput.BtnInputConfirm}
          onClick={addNewDateHandler}
        >
          CONFIRM
        </button>
        <button
          className={classesInput.BtnInputCancel}
          onClick={props.cancelModal}
        >
          CANCEL
        </button>
        <br />
        <div className={classes.message}>{messageToUser}</div>
      </div>
    </div>
  );
}
