import React, { Fragment, useState } from "react";
import Tree from "./tree";

const TreeExample2: React.FC = () => {
  const [array] = useState([
    {
      text: "1",
      value: "1",
      children: [
        {
          text: "1.1",
          value: "1.1",
          children: [
            {
              text: "1.1.1",
              value: "1.1.1",
            },
            {
              text: "1.1.2",
              value: "1.1.2",
            },
          ],
        },
        {
          text: "1.2",
          value: "1.2",
          children: [
            {
              text: "1.2.1",
              value: "1.2.2",
            },
          ],
        },
      ],
    },
    {
      text: "11",
      value: "11",
    },
    {
      text: "2",
      value: "2",
      children: [
        {
          text: "2.1",
          value: "2.1",
        },
        {
          text: "2.2",
          value: "2.2",
        },
      ],
    },
  ]);
  const [selectedValues, setSelectedValues] = useState(["1.1.1"]);

  return (
    <div>
      <Fragment>
        <h3>Normal Tree</h3>
        <p>Data display with multiple select.</p>
        <div style={{ width: 200 }}>
          <Tree
            sourceData={array}
            selected={selectedValues}
            onChange={(selected) => setSelectedValues(selected)}
            multiple={true}
          />
        </div>
      </Fragment>
    </div>
  );
};

export default TreeExample2;
