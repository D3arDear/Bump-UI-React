import React, { HTMLAttributes, UIEventHandler, useState, useEffect, useRef, MouseEventHandler } from "react";
import "./scroll.scss";
import scrollbarWidth from "./scrollbar-width";

interface Props extends HTMLAttributes<HTMLDivElement> {}

// const isTouchDevice: boolean = "ontouchstart" in document.documentElement; // 判断是不是移动设备
const ScrollArea: React.FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barVisible, setbarVisible] = useState(false);
  const [barTop, _setBarTop] = useState(0);
  const setBarTop = (number: number) => {
    const { current } = containerRef;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const maxBarTop = ((scrollHeight - viewHeight) * viewHeight) / scrollHeight;
    if (number < 0) {
      return;
    }
    if (number > maxBarTop) {
      return;
    }
    _setBarTop(number);
  };
  const timerIdRef = useRef<number | null>(null);
  const onScroll: UIEventHandler = (e) => {
    setbarVisible(true);
    const { current } = containerRef;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const scrollTop = current!.scrollTop;
    setBarTop((scrollTop * viewHeight) / scrollHeight);
    if (timerIdRef.current !== null) {
      window.clearTimeout(timerIdRef.current!);
    }
    timerIdRef.current = window.setTimeout(() => {
      setbarVisible(false);
    }, 300);
  };
  const draggingRef = useRef(false);
  const firstYRef = useRef(0);
  const firstBarTopRef = useRef(0);
  const onMouseDownBar: MouseEventHandler = (e) => {
    draggingRef.current = true;
    firstYRef.current = e.clientY;
    firstBarTopRef.current = barTop;
  };
  const onMouseMoveBar = (e: MouseEvent) => {
    if (draggingRef.current) {
      const delta = e.clientY - firstYRef.current;
      const newBarTop = firstBarTopRef.current + delta;
      setBarTop(newBarTop);
      const scrollHeight = containerRef.current!.scrollHeight;
      const viewHeight = containerRef.current!.getBoundingClientRect().height;
      containerRef.current!.scrollTop = (newBarTop * scrollHeight) / viewHeight;
    }
  };
  const onMouseUpBar = () => {
    draggingRef.current = false;
  };
  const onSelect = (e: Event) => {
    if (draggingRef.current) {
      e.preventDefault();
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(`barvisible 变为 ${barVisible}`);
  }, [barVisible]);
  useEffect(() => {
    const scrollHeight = containerRef.current!.scrollHeight;
    const viewHeight = containerRef.current!.getBoundingClientRect().height;
    setBarHeight((viewHeight * viewHeight) / scrollHeight);
  }, []);
  useEffect(() => {
    document.addEventListener("mouseup", onMouseUpBar);
    document.addEventListener("mousemove", onMouseMoveBar);
    document.addEventListener("selectstart", onSelect);
    return () => {
      document.removeEventListener("mouseup", onMouseUpBar);
      document.removeEventListener("mousemove", onMouseMoveBar);
      document.removeEventListener("selectstart", onSelect);
    };
  }, []);
  return (
    <div className="bui-scroll" {...rest}>
      <div className="bui-scroll-inner" style={{ right: -scrollbarWidth() }} ref={containerRef} onScroll={onScroll}>
        {children}
      </div>
      {barVisible && (
        <div className="bui-scroll-track">
          <div
            className="bui-scroll-bar"
            style={{ height: barHeight, transform: `translateY(${barTop}px)` }}
            onMouseDown={onMouseDownBar}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ScrollArea;
