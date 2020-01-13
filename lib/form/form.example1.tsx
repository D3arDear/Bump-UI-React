import React, { useState, Fragment } from "react";
import Form, { FormValue } from "./form";

export default function FormExample1() {
  const [formData, setFromData] = useState<FormValue>({
    username: "brenz",
    password: "Skyrim",
  });
  const [fields] = useState([
    { name: "username", label: "用户名", input: { type: "text" } },
    { name: "password", label: "密码", input: { type: "password" } },
  ]);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData);
  };
  return (
    <Fragment>
      {JSON.stringify(formData)}
      <Form
        value={formData}
        fields={fields}
        buttons={
          <Fragment>
            <button type="submit">提交</button>
            <button>返回</button>
          </Fragment>
        }
        onSubmit={onSubmit}
        onChange={(newValue) => setFromData(newValue)}
      />
    </Fragment>
  );
}
