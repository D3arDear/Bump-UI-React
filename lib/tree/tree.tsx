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

type Props = {
  sourceData: SourceDataItem[];
  onChange: (item: SourceDataItem, bool: boolean) => void;
} & ({ selected: string[]; multiple: true } | { selected: string; multiple?: false });

const Tree: React.FC<Props> = (props) => {
  const { selected, onChange, multiple } = props;

  const renderItem = (item: SourceDataItem, level = 1) => {
    const classes = {
      ["level-" + level]: true,
      item: true,
    };
    const checked = multiple ? selected.indexOf(item.value) >= 0 : selected === item.value;

    return (
      <div key={item.value} className={sc(classes)}>
        <div className={sc("text")}>
          <input type="checkbox" onChange={(e) => onChange(item, e.target.checked)} checked={checked} />
          {item.text}
        </div>
        {item.children?.map((subItem) => {
          return renderItem(subItem, level + 1);
        })}
      </div>
    );
  };

  return (
    <div>
      {props.sourceData?.map((item) => {
        return renderItem(item);
      })}
    </div>
  );
};

export default Tree;
