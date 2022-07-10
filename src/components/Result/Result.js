import React from "react";
import style from "./Result.module.css";
const Result = (props) => {
  return (
    <div className={style.display}>
      <div className={style["display__screen"]}>{props.text}</div>
      <div className={style.result}> 
        {props.result === "" ? "0" : `${props.result}`}
      </div>
    </div>
  );
};

export default Result;
