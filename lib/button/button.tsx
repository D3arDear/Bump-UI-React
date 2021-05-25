import React from "react";
import classes from "../helpers/classes";
import "./button.scss";

interface ButtonProps {
  level?: "primary" | "danger" | "normal" | "warning";
  icon?: string;
  position?: "left" | "right";
  size?: "small" | "medium" | "large";
  textButton?: boolean;
  htmlType?: "button" | "submit" | "reset";
  loading?: boolean;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { className, children, level, disabled, htmlType, ...rest } = props;
  return (
    <button
      className={classes("bui-button root-button", `bui-button-${level}`, className)}
      type={htmlType}
      {...rest}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
