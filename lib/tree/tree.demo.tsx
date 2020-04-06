import React, { Fragment } from "react";
import Demo from "../../demo";
import TreeExample1 from "./tree.example1";
import TreeExample2 from "./tree.example2";

const TreeDemo = () => {
  return (
    <Fragment>
      <Demo code={require("!!raw-loader!./tree.example1.tsx").default}>
        <TreeExample1 />
      </Demo>
      <Demo code={require("!!raw-loader!./tree.example2.tsx").default}>
        <TreeExample2 />
      </Demo>
    </Fragment>
  );
};

export default TreeDemo;
