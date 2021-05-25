import React, { InputHTMLAttributes } from "react";
import classes from "../helpers/classes";
import "./input.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  standard?: boolean;
}

const Input: React.FunctionComponent<Props> = (props) => {
  const { className, label, value, standard, ...rest } = props;
  const onFocus = () => (value ? "focus" : "");
  const noLabel = () => (label ? "" : "noLabel");
  const standout = () => (standard ? "standard" : "");
  return (
    <div
      className={classes(
        "bui-input-wrapper",
        "root-input",
        `${noLabel()}`,
        `${standout()}`,
        className
      )}>
      {label && (
        <div className={classes(`bui-input-label ${onFocus()}`)}>
          <span>{label}</span>
        </div>
      )}
      <input className={classes("bui-input", className)} value={value} {...rest} />
    </div>
  );
};

export default Input;
