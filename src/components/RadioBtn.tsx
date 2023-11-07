import * as React from "react";

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
      <header className="App-header">{props.label}</header>
      <div onChange={props.handler}>
        {props.options.map((option) => {
          return (
            <input
              defaultChecked={option === props.defaultValue ? true : false}
              key={option}
              type="radio"
              value={option}
              name={props.label}
            ></input>
          );
        })}
      </div>
    </>
  );
}

export default RadioBtn;
