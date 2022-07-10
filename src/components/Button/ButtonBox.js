import React from "react";
import Button from "./Button";
import style from "./ButtonBox.module.css";

const BtnValues = [
  "AC",
  "(",
  ")",
  "/",
  "7",
  "8",
  "9",
  "x",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
const ButtonBox = (props) => {
  return (
    <div className={style.btnBox}>
      {BtnValues.map((btn) => (
        <Button
          type={btn}
          key={Math.random()}
          add={props.add}
          calculateResult={props.calculateResult}
          reset={props.reset}
          clear={props.clear}
        />
      ))}
    </div>
  );
};

export default ButtonBox;
