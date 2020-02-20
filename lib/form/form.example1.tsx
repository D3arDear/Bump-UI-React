import React, { useState, Fragment } from "react";
import Form, { FormValue } from "./form";
import Validator from "./validator";
import Button from "../button/button";

const usernames = ["BrenBren", "Antonio", "Alice", "Bob"];
const checkUserName = (username: string, succeed: () => void, fail: () => void) => {
  setTimeout(() => {
    if (usernames.indexOf(username) >= 0) {
      fail();
    } else {
      succeed();
    }
  }, 2000);
};

export default function FormExample1() {
  const [formData, setFromData] = useState<FormValue>({
    username: "BrenBren",
    password: "",
  });
  const [fields] = useState([
    { name: "username", label: "用户名", input: { type: "text" } },
    { name: "password", label: "密码", input: { type: "password" } },
  ]);
  const [errors, setErrors] = useState({});
  const validator = (username: string) => {
    return new Promise<string>((resolve, reject) => {
      checkUserName(username, resolve, () => reject("unique"));
    });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      { key: "username", required: true },
      {
        key: "username",
        minLength: 6,
        maxLength: 16,
      },
      {
        key: "username",
        validator,
      },
      {
        key: "username",
        validator,
      },
      {
        key: "username",
        pattern: /^[A-Za-z0-9]+$/,
      },
      {
        key: "password",
        required: true,
      },
      {
        key: "password",
        validator,
      },
      {
        key: "password",
        validator,
      },
    ];
    Validator(formData, rules, (errors) => {
      console.log(errors);
      setErrors(errors);
    });
  };
  const errorTranslation = (message: string) => {
    const map: {
      [key: string]: string;
    } = {
      unique: "Username is taken",
      required: "Required",
      minLength: "Too short",
      maxLength: "Too long",
    };
    return map[message];
  };
  return (
    <Fragment>
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
        errorTranslation={errorTranslation}
        onSubmit={onSubmit}
        onChange={(newValue) => setFromData(newValue)}
      />
    </Fragment>
  );
}
