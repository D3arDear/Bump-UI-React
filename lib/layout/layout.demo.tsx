import React, { Fragment } from "react";
import Demo from "../../demo";
import LayoutExample1 from "./layout.example1";
import LayoutExample2 from "./layout.example2";
import LayoutExample3 from "./layout.example3";
import LayoutExample4 from "./layout.example4";

const DialogDemo = () => {
  return (
    <Fragment>
      <Demo code={require("!!raw-loader!./layout.example1.tsx").default}>
        <LayoutExample1></LayoutExample1>
      </Demo>
      <Demo code={require("!!raw-loader!./layout.example2.tsx").default}>
        <LayoutExample2></LayoutExample2>
      </Demo>
      <Demo code={require("!!raw-loader!./layout.example3.tsx").default}>
        <LayoutExample3></LayoutExample3>
      </Demo>
      <Demo code={require("!!raw-loader!./layout.example4.tsx").default}>
        <LayoutExample4></LayoutExample4>
      </Demo>
    </Fragment>
  );
};

export default DialogDemo;
