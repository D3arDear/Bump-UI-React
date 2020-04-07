import React, { ChangeEventHandler, useRef } from "react";
import { scopeClassMaker } from "../helpers/classes";
import useUpdate from "../hooks/useUpdate";
import useToggle from "../hooks/useToggle";
const scopedClass = scopeClassMaker("bui-tree");
const sc = scopedClass;

interface Props {
  item: SourceDataItem;
  level: number;
  treeProps: TreeProps;
  onItemChange: (values: string[]) => void;
}

const TreeItem: React.FC<Props> = (props) => {
  const { level, item, treeProps } = props;
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { expand, collapse, value: expanded } = useToggle(true);

  const classes = {
    ["level-" + level]: true,
    item: true,
  };

  const checked = treeProps.multiple ? treeProps.selected.indexOf(item.value) >= 0 : treeProps.selected === item.value;

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const childrenValues = collectChildrenValue(item);
    if (treeProps.multiple) {
      if (e.target.checked) {
        props.onItemChange([...treeProps.selected, ...childrenValues, item.value]);
      } else {
        props.onItemChange(
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
  const onItemChange = (values: string[]) => {
    const childrenValues = collectChildrenValue(item);
    const common = intersect(values, childrenValues);
    if (common.length !== 0) {
      props.onItemChange(Array.from(new Set(values.concat(item.value))));
      inputRef.current!.indeterminate = common.length !== childrenValues.length;
    } else {
      props.onItemChange(values.filter((v) => v !== item.value));
      inputRef.current!.indeterminate = false;
    }
  };

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
        <input ref={inputRef} type="checkbox" onChange={onChange} checked={checked} />
        {item.text}
        {item.children && (
          <span onSelect={(e) => e.preventDefault()}>
            {expanded ? <span onClick={collapse}>-</span> : <span onClick={expand}>+</span>}
          </span>
        )}
      </div>
      <div ref={divRef} className={sc({ children: true, collapsed: !expanded })}>
        {item.children?.map((subItem) => {
          return (
            <TreeItem
              key={subItem.value}
              item={subItem}
              level={level + 1}
              onItemChange={onItemChange}
              treeProps={treeProps}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TreeItem;

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

function intersect<T>(array1: T[], array2: T[]): T[] {
  const result: T[] = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) >= 0) {
      result.push(array1[i]);
    }
  }
  return result;
}
