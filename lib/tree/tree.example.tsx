import React, { Fragment, useState } from "react";
import Tree, { SourceDataItem } from "./tree";

const TreeExample: React.FC = () => {
  const [array, setArray] = useState([
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
  console.log(setArray);

  const onChange = (item: SourceDataItem, bool: boolean) => {
    if (bool) {
      setSelectedValues([...selectedValues, item.value]);
    } else {
      setSelectedValues(selectedValues.filter((value) => value !== item.value));
    }
  };

  return (
    <div>
      <Fragment>
        <h3>Normal Tree</h3>
        <p>Data display.</p>
        {selectedValues.join("|")}
        <div style={{ width: 200 }}>
          <Tree sourceData={array} selected={selectedValues} onChange={onChange} multiple={true} />
        </div>
      </Fragment>
    </div>
  );
};

export default TreeExample;
