import React, { Fragment } from "react";
import Demo from "../../demo";
import FormExample1 from "./form.example1";

const DialogDemo = () => {
  return (
    <Fragment>
      <Demo code={require("!!raw-loader!./form.example1.tsx").default}>
        <FormExample1></FormExample1>
      </Demo>
    </Fragment>
  );
};

export default DialogDemo;
