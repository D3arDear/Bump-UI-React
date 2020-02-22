import React, { HTMLAttributes } from "react";
import "./scroll.scss";
import scrollbarWidth from "./scrollbar-width";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const ScrollArea: React.FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <div className="bui-scroll" {...rest}>
      <div className="bui-scroll-inner" style={{ right: -scrollbarWidth() }}>
        {children}
      </div>
    </div>
  );
};

export default ScrollArea;
