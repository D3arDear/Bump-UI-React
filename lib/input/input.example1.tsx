import React, { useState } from "react";
import Input from "./input";

const InputExample1 = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <div>
        <h2>Normal Input</h2>
        <Input value={value} label="测试" onChange={(e) => setValue(e.target.value)}></Input>
      </div>
    </div>
  );
};

export default InputExample1;
