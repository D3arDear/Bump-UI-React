import React, { Fragment } from "react";
import Demo from "../../demo";
import InputExample1 from "./input.example1";
import InputExample2 from "./input.example2";

const DialogDemo = () => {
  return (
    <Fragment>
      <Demo code={require("!!raw-loader!./input.example1.tsx").default}>
        <InputExample1></InputExample1>
      </Demo>
      <Demo code={require("!!raw-loader!./input.example2.tsx").default}>
        <InputExample2></InputExample2>
      </Demo>
    </Fragment>
  );
};

export default DialogDemo;
