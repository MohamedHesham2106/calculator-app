import React, { Fragment } from "react";
import style from "./Bubbles.module.css";
import ReactDOM from "react-dom";
const Bubble = () => {
  return (
    <div className={style.bubbles}>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
      <div className={style.bubble}></div>
    </div>
  );
};
const Bubbles = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Bubble />, document.getElementById("bubbles"))}
    </Fragment>
  );
};

export default Bubbles;
