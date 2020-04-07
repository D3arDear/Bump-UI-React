import React, { ChangeEventHandler, useState, useRef } from "react";
import { scopeClassMaker } from "../helpers/classes";
import useUpdate from "../hooks/useUpdate";
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

  const collectChildrenValue = (item: SourceDataItem): any => {
    return flatten(item.children?.map((i) => [i.value, collectChildrenValue(i)]));
  };

  interface RecursiveArray<T> extends Array<T | RecursiveArray<T>> {}

  function flatten(array?: RecursiveArray<string>): string[] {
    if (!array) {
      return [];
    }
    return array.reduce<string[]>(
      (result, current) => result.concat(typeof current === "string" ? current : flatten(current)),
      [],
    );
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const childrenValues = collectChildrenValue(item);
    if (treeProps.multiple) {
      if (e.target.checked) {
        treeProps.onChange([...treeProps.selected, ...childrenValues, item.value]);
      } else {
        treeProps.onChange(
          treeProps.selected.filter((value: string) => value !== item.value && childrenValues.indexOf(value) === -1),
        );
      }
    } else {
      if (e.target.checked) {
        treeProps.onChange(item.value);
      } else {
        treeProps.onChange("");
      }
    }
  };

  const expand = () => {
    setExpanded(true);
  };
  const collapse = () => {
    setExpanded(false);
  };

  const [expanded, setExpanded] = useState(true);
  const divRef = useRef<HTMLDivElement>(null);

  useUpdate(expanded, () => {
    if (!divRef.current) {
      return;
    }
    if (expanded) {
      divRef.current.style.height = "auto";
      const { height } = divRef.current.getBoundingClientRect();
      divRef.current.style.height = "0px";
      divRef.current.getBoundingClientRect();
      divRef.current.style.height = height + "px";
      const afterExpand = () => {
        if (!divRef.current) {
          return;
        }
        divRef.current.style.height = "";
        divRef.current.classList.add("bui-tree-children-present");
        divRef.current.removeEventListener("transitionend", afterExpand);
      };
      divRef.current.addEventListener("transitionend", afterExpand);
    } else {
      const { height } = divRef.current.getBoundingClientRect();
      divRef.current.style.height = height + "px";
      divRef.current.getBoundingClientRect();
      divRef.current.style.height = "0px";
      const afterCollapse = () => {
        if (!divRef.current) {
          return;
        }
        divRef.current.style.height = "";
        divRef.current.classList.add("bui-tree-children-gone");
        divRef.current.removeEventListener("transitionend", afterCollapse);
      };
      divRef.current.addEventListener("transitionend", afterCollapse);
    }
  });

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
      <div ref={divRef} className={sc({ children: true, collapsed: !expanded })}>
        {item.children?.map((subItem) => {
          return <TreeItem key={subItem.value} item={subItem} level={level + 1} treeProps={treeProps} />;
        })}
      </div>
    </div>
  );
};

export default TreeItem;
