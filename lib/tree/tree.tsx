import React, { ChangeEventHandler } from "react";
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
} & (
  | { multiple: true; selected: string[]; onChange: (newSelected: string[]) => void }
  | { multiple: false; selected: string; onChange: (newSelected: string) => void }
);

const Tree: React.FC<Props> = (props) => {
  const renderItem = (item: SourceDataItem, level = 1) => {
    const classes = {
      ["level-" + level]: true,
      item: true,
    };
    const checked = props.multiple ? props.selected.indexOf(item.value) >= 0 : props.selected === item.value;

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      if (props.multiple) {
        if (e.target.checked) {
          props.onChange([...props.selected, item.value]);
        } else {
          props.onChange(props.selected.filter((value: string) => value !== item.value));
        }
      } else {
        props.onChange(item.value);
      }
    };

    return (
      <div key={item.value} className={sc(classes)}>
        <div className={sc("text")}>
          <input type="checkbox" onChange={onChange} checked={checked} />
          {item.text}
        </div>
        {item.children?.map((subItem) => renderItem(subItem, level + 1))}
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
