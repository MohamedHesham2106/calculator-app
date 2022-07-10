import React from "react";
import style from "./Button.module.css";
const Button = (props) => {
  const btnHandler = (event) => {
    event.preventDefault();
    if (event.target.name === "=") {
      props.calculateResult();
    } else if (event.target.name === "AC") {
      props.reset();
    } else if (event.target.name === "x") {
      props.add("*");
    } else {
      props.add(event.target.name);
    }
  };
  return (
    <button name={props.type} className={style.btn} onClick={btnHandler}>
      {props.type}
    </button>
  );
};

export default Button;
