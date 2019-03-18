import React, { Component } from "react";
import SubscribeForm from '../SubscribeForm'
import './Style.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div onClick={handleClose} className="back-drop"/>
      <section className="modal-main">
        {children}
      </section>

    </div>
  );
};
export default Modal
