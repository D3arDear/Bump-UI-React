import React from "react";
import "./importIcons";
import "./icon.scss";
import "./icon.js";
import classes from "../helpers/classes";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({ className, name, ...restProps }) => {
  return (
    <svg className={classes("BUI-Icon", className)} {...restProps}>
      <use xlinkHref={`#i-${name}`} />
    </svg>
  );
};

export default Icon;
