import React, { useState } from "react";
import Input from "./input";

const InputExample2 = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <div>
        <h2>standard Input</h2>
        <Input
          value={value}
          label="测试"
          standard
          onChange={(e) => setValue(e.target.value)}
        ></Input>
      </div>
    </div>
  );
};

export default InputExample2;
