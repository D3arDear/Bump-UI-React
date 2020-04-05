import React, { Fragment } from "react";
import Tree from "./tree";

const TreeExample: React.FunctionComponent = () => {
  return (
    <div>
      <Fragment>
        <h3>Normal Tree</h3>
        <Tree></Tree>
      </Fragment>
    </div>
  );
};

export default TreeExample;
