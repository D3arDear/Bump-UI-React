import React, { InputHTMLAttributes } from "react";
import classes from "../helpers/classes";
import "./input.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FunctionComponent<Props> = (props) => {
  const { className, label, value, ...rest } = props;
  return (
    <div className={classes("bui-input-wrapper", className)}>
      <div className={classes("bui-input-label")}>
        <span>{label}</span>
      </div>
      <input className={classes("bui-input", className)} value={value} {...rest} />
    </div>
  );
};

export default Input;
