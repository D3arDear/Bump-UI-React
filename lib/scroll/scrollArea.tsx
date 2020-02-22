import React, { HTMLAttributes, UIEventHandler, useState, useEffect, useRef } from "react";
import "./scroll.scss";
import scrollbarWidth from "./scrollbar-width";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const ScrollArea: React.FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;
  const [barHeight, setBarHeight] = useState(0);
  const onScroll: UIEventHandler = (e) => {
    // const scrollHeight = e.currentTarget.scrollHeight;
    // const viewHeight = e.currentTarget.getBoundingClientRect().height;
    // setBarHeight((viewHeight * viewHeight) / scrollHeight);
  };
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollHeight = containerRef.current!.scrollHeight;
    const viewHeight = containerRef.current!.getBoundingClientRect().height;
    setBarHeight((viewHeight * viewHeight) / scrollHeight);
  }, []);
  return (
    <div className="bui-scroll" {...rest}>
      <div className="bui-scroll-inner" style={{ right: -scrollbarWidth() }} ref={containerRef} onScroll={onScroll}>
        {children}
      </div>
      <div className="bui-scroll-track">
        <div className="bui-scroll-bar" style={{ height: barHeight }}></div>
      </div>
    </div>
  );
};

export default ScrollArea;
