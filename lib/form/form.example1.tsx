import React, { useState, Fragment } from "react";
import Form, { FormValue } from "./form";
import Validator from "./validator";
import Button from "../button/button";

export default function FormExample1() {
  const [formData, setFromData] = useState<FormValue>({
    username: "brenz",
    password: "Skyrim",
  });
  const [fields] = useState([
    { name: "username", label: "用户名", input: { type: "text" } },
    { name: "password", label: "密码", input: { type: "password" } },
  ]);
  const [errors, setErrors] = useState({});
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      { key: "username", required: true },
      {
        key: "username",
        minLength: 8,
        maxLength: 16,
      },
      {
        key: "username",
        pattern: /^[A-Za-z0-9]+$/,
      },
      {
        key: "password",
        required: true,
      },
    ];
    const errors = Validator(formData, rules);
    console.log(errors);
    setErrors(errors);
  };
  return (
    <Fragment>
      {JSON.stringify(formData)}
      <Form
        value={formData}
        fields={fields}
        buttons={
          <Fragment>
            <Button type="submit">提交</Button>
            <Button level="important">返回</Button>
          </Fragment>
        }
        errors={errors}
        onSubmit={onSubmit}
        onChange={(newValue) => setFromData(newValue)}
      />
    </Fragment>
  );
}
