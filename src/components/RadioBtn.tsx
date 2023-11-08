import * as React from "react";
import classes from "./RadioBtn.module.css";

interface RadioData {
  options: string[] | number[];
  defaultValue: string | number;
  btnState: string | number;
  label: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function RadioBtn(props: RadioData) {
  return (
    <>
      <header className={classes.label}>{props.label}</header>
      <div onChange={props.handler}>
        {props.options.map((option) => {
          return (
            <label className={classes.container}>
              {option}
              <input
                defaultChecked={option === props.defaultValue ? true : false}
                key={option}
                type="radio"
                value={option}
                name={props.label}
              ></input>
              <span className={classes.checkmark}></span>
            </label>
          );
        })}
      </div>
    </>
  );
}

export default RadioBtn;
