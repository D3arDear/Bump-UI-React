import React, { Fragment, useState } from "react";
import Tree from "./tree";

const TreeExample: React.FC = () => {
  const [array, setArray] = useState([
    {
      text: "一",
      value: "1",
      children: [
        {
          text: "一之一",
          value: "1.1",
        },
        {
          text: "一之二",
          value: "1.2",
        },
      ],
    },
    {
      text: "二",
      value: "1",
      children: [
        {
          text: "二之一",
          value: "2.1",
        },
        {
          text: "二之二",
          value: "2.2",
        },
      ],
    },
  ]);
  console.log(setArray);
  return (
    <div>
      <Fragment>
        <h3>Normal Tree</h3>
        <Tree sourceData={array} />
      </Fragment>
    </div>
  );
};

export default TreeExample;
