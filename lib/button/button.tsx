import React, { ButtonHTMLAttributes } from "react";
import classes from "../helpers/classes";
import "./button.scss";
// 必须引入 react
// 因为 <div a="1">hi</div> 相当于 react.createElement("div",{a:"1"},"hi")

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: "important" | "danger" | "normal";
}

const Button: React.FunctionComponent<Props> = (props) => {
  const { className, children, level, ...rest } = props;
  return (
    <button className={classes("bui-button root-button", `bui-button-${level}`, className)} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  level: "normal",
};

export default Button;
