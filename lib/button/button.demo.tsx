import React, { Fragment } from "react";
import Demo from "../../demo";
import ButtonExample from "./button.example";

const ButtonDemo = () => {
  return (
    <Fragment>
      <Demo code={require("!!raw-loader!./button.example.tsx").default}>
        <ButtonExample></ButtonExample>
      </Demo>
    </Fragment>
  );
};

export default ButtonDemo;
