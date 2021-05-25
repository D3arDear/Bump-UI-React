import React, { Fragment } from "react";
import Button from "./button";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <Fragment>
        <h3>Normal Button</h3>
        <Button>Button</Button>
      </Fragment>
      <Fragment>
        <h3>Normal Button</h3>
        <Button level="primary">Primary Button</Button>
      </Fragment>
    </div>
  );
};

export default ButtonExample;
