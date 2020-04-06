import React, { ChangeEventHandler, useState } from "react";
import { scopeClassMaker } from "../helpers/classes";
const scopedClass = scopeClassMaker("bui-tree");
const sc = scopedClass;

interface Props {
  item: SourceDataItem;
  level: number;
  treeProps: TreeProps;
}

const TreeItem: React.FC<Props> = (props) => {
  const { level, item, treeProps } = props;
  const classes = {
    ["level-" + level]: true,
    item: true,
  };
  const checked = treeProps.multiple ? treeProps.selected.indexOf(item.value) >= 0 : treeProps.selected === item.value;

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (treeProps.multiple) {
      if (e.target.checked) {
        treeProps.onChange([...treeProps.selected, item.value]);
      } else {
        treeProps.onChange(treeProps.selected.filter((value: string) => value !== item.value));
      }
    } else {
      if (e.target.checked) {
        treeProps.onChange(item.value);
      } else {
        treeProps.onChange("");
      }
    }
  };

  const [expanded, setExpanded] = useState(true);
  const expand = () => {
    setExpanded(true);
  };
  const collapse = () => {
    setExpanded(false);
  };
  return (
    <div key={item.value} className={sc(classes)}>
      <div className={sc("text")}>
        <input type="checkbox" onChange={onChange} checked={checked} />
        {item.text}
        {item.children && (
          <span onSelect={(e) => e.preventDefault()}>
            {expanded ? <span onClick={collapse}>-</span> : <span onClick={expand}>+</span>}
          </span>
        )}
      </div>
      <div className={sc({ children: true, collapsed: !expanded })}>
        {item.children?.map((subItem) => {
          return <TreeItem key={subItem.value} item={subItem} level={level + 1} treeProps={treeProps} />;
        })}
      </div>
    </div>
  );
};

export default TreeItem;
