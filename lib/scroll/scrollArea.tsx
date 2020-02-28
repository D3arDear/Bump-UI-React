import React, {
  HTMLAttributes,
  UIEventHandler,
  useState,
  useEffect,
  useRef,
  MouseEventHandler,
  TouchEventHandler,
} from "react";
import "./scroll.scss";
import scrollbarWidth from "./scrollbar-width";
import classes from "../helpers/classes";

interface Props extends HTMLAttributes<HTMLDivElement> {
  onPull?: () => void;
}

// const isTouchDevice: boolean = "ontouchstart" in document.documentElement; // 判断是不是移动设备
const ScrollArea: React.FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barVisible, setbarVisible] = useState(false);
  const [barTop, _setBarTop] = useState(0);
  const [translateY, _setTranslateY] = useState(0);
  const setTranslateY = (y: number) => {
    if (y < 0) {
      return;
    } else if (y > 150) {
      y = 150;
    }
    _setTranslateY(y);
  };
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
  const lastYRef = useRef(0);
  const moveCount = useRef(0);
  const pulling = useRef(false);
  const onTouchStart: TouchEventHandler = (e) => {
    const scrollTop = containerRef.current!.scrollTop;
    if (scrollTop !== 0) {
      return;
    }
    pulling.current = true;
    lastYRef.current = e.touches[0].clientY;
    moveCount.current = 0;
  };
  const onTouchMove: TouchEventHandler = (e) => {
    const deltaY = e.touches[0].clientY - lastYRef.current;
    moveCount.current += 1;
    if (moveCount.current === 1 && deltaY < 0) {
      pulling.current = false;
      return;
    }
    if (!pulling.current) {
      return;
    }
    setTranslateY(translateY + deltaY);
    lastYRef.current = e.touches[0].clientY;
  };
  const onTouchEnd: TouchEventHandler = (e) => {
    if (pulling.current) {
      setTranslateY(0);
      props.onPull && props.onPull();
      pulling.current = false;
    }
  };
  return (
    <div className="bui-scroll" {...rest}>
      <div
        className="bui-scroll-inner"
        style={{ right: -scrollbarWidth(), transform: `translateY(${translateY}px)` }}
        ref={containerRef}
        onScroll={onScroll}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {children}
      </div>
      <div className={classes("bui-scroll-track", `${barVisible ? "" : "barHidden"}`)}>
        <div
          className="bui-scroll-bar"
          style={{ height: barHeight, transform: `translateY(${barTop}px)` }}
          onMouseDown={onMouseDownBar}
        ></div>
      </div>
      <div className="bui-scroll-pulling" style={{ height: translateY }}>
        {translateY === 150 ? (
          <span className="bui-scroll-pulling-text">释放即可更新</span>
        ) : (
          <span className="bui-scroll-pulling-icon">↓</span>
        )}
      </div>
    </div>
  );
};

export default ScrollArea;
