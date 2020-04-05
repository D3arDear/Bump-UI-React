import React from "react";
import "./tree.scss";
import { scopeClassMaker } from "../helpers/classes";

interface SourceDataItem {
  text: string;
  value: string;
  children?: SourceDataItem[];
}
interface Props {
  sourceData: SourceDataItem[];
  selectedValues: string[];
}
const scopedClass = scopeClassMaker("bui-tree");
const sc = scopedClass;
const renderItem = (item: SourceDataItem, selectedValues: string[], level = 1) => {
  const classes = {
    ["level-" + level]: true,
    item: true,
  };

  return (
    <div key={item.value} className={sc(classes)}>
      <div className={sc("text")}>
        <input type="checkbox" checked={selectedValues.indexOf(item.value) >= 0} />
        {item.text}
      </div>
      {item.children?.map((subItem) => {
        return renderItem(subItem, selectedValues, level + 1);
      })}
    </div>
  );
};

const Tree: React.FC<Props> = (props) => {
  const { selectedValues } = props;
  return (
    <div>
      {props.sourceData?.map((item) => {
        return renderItem(item, selectedValues);
      })}
    </div>
  );
};

export default Tree;
