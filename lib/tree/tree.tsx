import React from "react";
import "./tree.scss";
import { scopeClassMaker } from "../helpers/classes";
const scopedClass = scopeClassMaker("bui-tree");
const sc = scopedClass;

export interface SourceDataItem {
  text: string;
  value: string;
  children?: SourceDataItem[];
}
interface Props {
  sourceData: SourceDataItem[];
  selectedValues: string[];
  onChange: (item: SourceDataItem, bool: boolean) => void;
}
const renderItem = (
  item: SourceDataItem,
  selectedValues: string[],
  onChange: (item: SourceDataItem, bool: boolean) => void,
  level = 1,
) => {
  const classes = {
    ["level-" + level]: true,
    item: true,
  };

  return (
    <div key={item.value} className={sc(classes)}>
      <div className={sc("text")}>
        <input
          type="checkbox"
          onChange={(e) => onChange(item, e.target.checked)}
          checked={selectedValues.indexOf(item.value) >= 0}
        />
        {item.text}
      </div>
      {item.children?.map((subItem) => {
        return renderItem(subItem, selectedValues, onChange, level + 1);
      })}
    </div>
  );
};

const Tree: React.FC<Props> = (props) => {
  const { selectedValues, onChange } = props;
  return (
    <div>
      {props.sourceData?.map((item) => {
        return renderItem(item, selectedValues, onChange);
      })}
    </div>
  );
};

export default Tree;
