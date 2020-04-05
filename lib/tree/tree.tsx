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

type A = { selected: string[]; multiple: true };
type B = { selected: string; multiple: false };

type Props = {
  sourceData: SourceDataItem[];
  onChange: (item: SourceDataItem, bool: boolean) => void;
} & (A | B);

const renderItem = (
  item: SourceDataItem,
  selected: string[] | string,
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
          checked={selected.indexOf(item.value) >= 0}
        />
        {item.text}
      </div>
      {item.children?.map((subItem) => {
        return renderItem(subItem, selected, onChange, level + 1);
      })}
    </div>
  );
};

const Tree: React.FC<Props> = (props) => {
  const { selected, onChange, multiple } = props;
  if (multiple) {
    return (
      <div>
        {props.sourceData?.map((item) => {
          return renderItem(item, selected, onChange);
        })}
      </div>
    );
  } else {
    return <div>未完成</div>;
  }
};

export default Tree;
