import React, { useState, useEffect } from "react";

// npm i react-animate-on-scroll
import ScrollAnimation from "react-animate-on-scroll";

// EMailJS:
// https://www.emailjs.com/
// tenoriamici@gmail.com (Vonogolon)
// npm install emailjs-com --save
// https://www.npmjs.com/package/emailjs-com
import emailjs from "emailjs-com";

// Smooth Scroll to Anchor:
// npm i react-anchor-link-smooth-scroll
// https://www.npmjs.com/package/react-anchor-link-smooth-scroll
import AnchorLink from "react-anchor-link-smooth-scroll";

import backImage from "../../assets/images/contact.jpg";

import classes from "./style.module.css";
import ButtonFunc from "../UI/buttons/buttonFunc";

// SPINNER / LOADER:
// npm i react-loader-spinner
// https://www.npmjs.com/package/react-loader-spinner
import Loader from "react-loader-spinner";

export default function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [messageToUser, setMessageToUser] = useState(null);
  const [spinner, setSpinner] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageToUser(null);
    }, 6000);
    return () => {
      clearTimeout(timer);
    };
  }, [messageToUser]);

  function sendEmailHandler(e) {
    e.preventDefault();
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!pattern.test(email)) {
      setMessageToUser(
        <div className={classes.MessageToUser}>
          Please fill in all fields correctly
          {/* Favor preencher todos os campos corretamente. */}
        </div>
      );
      return;
    } else if (name.length < 3) {
      setMessageToUser(
        <div className={classes.MessageToUser}>
          Minimum 3 characters for name
          {/* Mínimo 3 caracteres para nome. */}
        </div>
      );
      return;
    } else if (telephone.length > 1 && telephone.length < 6) {
      setMessageToUser(
        <div className={classes.MessageToUser}>
          Minimum 6 characters for phone
          {/* Mínimo 6 caracteres para telefone. */}
        </div>
      );
      return;
    } else if (message.length < 10) {
      setMessageToUser(
        <div className={classes.MessageToUser}>
          Minimum 10 characters for message
          {/* Mínimo 10 caracteres para mensagem. */}
        </div>
      );
      return;
    } else {
      setSpinner(
        <div className={classes.spinnerContainer}>
          <Loader
            type="Oval"
            color="#4d7994"
            height={50}
            width={50}
            // timeout={3000}
          />
        </div>
      );
      // SENDING MESSAGE:
      // npm install emailjs-com --save
      const templateParams = {
        from_name: name,
        from_email: email,
        from_telefone: telephone,
        to_name: "maxwilsonpereira@gmail.com",
        message: message,
      };
      emailjs
        .send(
          // SERVICE ID:
          "gmail",
          // TEMPLATE ID (get at emailjs.com / Email Templates):
          "template_CH88ZAk1",
          // PARAMS:
          templateParams,
          // USER ID (get at emailjs.com / Account/API KEYS):
          "user_MVWH7ci1hYOVgC9eQWqOe"
        )
        .then(
          function (response) {
            setSpinner("");
            setMessageToUser(
              <div className={classes.MessageToUser}>
                Message sent successfully!
                {/* Mensagem enviada com sucesso! */}
                <br />
                We will be very glad to contact you soon!
                {/* Em breve entrarei em contato. */}
              </div>
            );
            console.log("SUCCESS!", response.status, response.text);
            setName("");
            setEmail("");
            setTelephone("");
            setMessage("");
          },
          function (err) {
            setSpinner("");
            setMessageToUser(
              <div className={classes.MessageToUser}>
                Service currently unavailable.
                {/* Serviço indisponível no momento. */}
                <br />
                Please contact us by email or phone.
                {/* Favor entrar em contato por e-mail ou telefone. */}
              </div>
            );
          }
        );
    }
  }
  function enterKeyPressedHandler(event) {
    // event.preventDefault();
    var code = event.keyCode || event.which;
    if (code === 13) {
      // alert("ENTER KEY PRESSED!");
      sendEmailHandler(event);
    }
  }

  return (
    <div className={classes.centeredAligned}>
      <div
        id="contactAnchor"
        style={{ position: "absolute", marginTop: "-40px" }}
      />
      <div
        className={classes.backgroundImage}
        style={{ backgroundImage: `url(${backImage})` }}
      >
        <div className={classes.containerContact}>
          <ScrollAnimation animateIn="fadeIn" duration={3}>
            <div className={classes.centered}>
              <h1 className={classes.titleContact}>
                CONTACT <span>&amp;</span> MANAGEMENT
              </h1>
              <h4 className={classes.titleMessage}>
                Get in touch via form, email or telephone
              </h4>
            </div>
            <div className={classes.contactGrid}>
              <div className={classes.centeredContent}>
                <div className={classes.containerInfos}>
                  <br />
                  <h2>
                    <span className={classes.underlineClass}>AUSTRIA</span>:
                    Werner Wurm
                  </h2>
                  <h3>+43 676 5117044</h3>
                  <h3>booking@awmusic.at</h3>
                  <h3>
                    <a
                      className={classes.FontWebsite}
                      href="https://www.awmusic.at"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.awmusic.at
                    </a>
                  </h3>
                  <br />
                  <h2>
                    <span className={classes.underlineClass}>BRAZIL</span>:
                    Sylvia Massari
                  </h2>
                  <h3>+55 21 987884531</h3>
                  <h3>tenoriamici@gmail.com</h3>
                  <br />
                  {/* <span className={classes.desktopOnly}> */}
                  {/* </span> */}
                </div>
                {messageToUser}
                {spinner}
              </div>
              <div id="anchorPointContact">
                <div>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    onKeyPress={enterKeyPressedHandler}
                    type="text"
                    required
                    placeholder="Name"
                    name={name}
                    value={name}
                  />
                  {/* <br /> */}
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={enterKeyPressedHandler}
                    type="email"
                    required
                    placeholder="E-mail"
                    name={email}
                    value={email}
                  />
                  {/* <br /> */}
                  <input
                    onChange={(e) => setTelephone(e.target.value)}
                    onKeyPress={enterKeyPressedHandler}
                    type="number"
                    placeholder="Telephone (optional)"
                    name={telephone}
                    value={telephone}
                  />
                  {/* <br /> */}
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    required
                    placeholder="Message"
                    name={message}
                    value={message}
                  />
                  <div className={classes.SubmitBtn}>
                    <AnchorLink href="#anchorPointContact">
                      <ButtonFunc function={sendEmailHandler}>SEND</ButtonFunc>
                    </AnchorLink>
                  </div>
                </div>
              </div>
              {/* <span className={classes.mobileOnly}>
          <br />
          {messageToUser}
        </span> */}
            </div>
            <br />
            <br />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
