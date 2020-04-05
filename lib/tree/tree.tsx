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
}
const scopedClass = scopeClassMaker("bui-tree");
const sc = scopedClass;
const renderItem = (item: SourceDataItem, level = 1) => {
  const classes = {
    ["level-" + level]: true,
    item: true,
  };

  return (
    <div key={item.value} className={sc(classes)}>
      {item.text}
      {item.children?.map((subItem) => {
        return renderItem(subItem, level + 1);
      })}
    </div>
  );
};

const Tree: React.FC<Props> = (props) => {
  return (
    <div>
      {props.sourceData?.map((item) => {
        return renderItem(item);
      })}
    </div>
  );
};

export default Tree;
