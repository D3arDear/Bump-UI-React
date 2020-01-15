import React, { InputHTMLAttributes } from "react";
import classes from "../helpers/classes";
import "./input.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FunctionComponent<Props> = (props) => {
  const { className, label, value, ...rest } = props;
  const onFocus = () => (value ? "focus" : "");
  return (
    <div className={classes("bui-input-wrapper root-input", className)}>
      <div className={classes(`bui-input-label ${onFocus()}`)}>
        <span>{label}</span>
      </div>
      <input className={classes("bui-input", className)} value={value} {...rest} />
    </div>
  );
};

export default Input;
