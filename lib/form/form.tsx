import React, { ReactFragment } from "react";
import Input from "../input/input";
import "./form.scss";
import classes from "../helpers/classes";

export interface FormValue {
  [K: string]: any;
}
interface Props {
  value: FormValue;
  fields: Array<{ name: string; label: string; input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: { [K: string]: string[] };
  errorsDisplayMode?: "first" | "all";
  errorTranslation?: (message: string) => string;
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const onInputChange = (name: string, value: string) => {
    const newFormValue = { ...formData, [name]: value };
    props.onChange(newFormValue);
  };
  const errorTranslation = (message: string) => {
    const map: any = {
      required: "必填",
      minLength: "太短",
      maxLength: "太长",
    };
    return (props.errorTranslation && props.errorTranslation(message)) || map[message] || "未知错误";
  };

  return (
    <form onSubmit={onSubmit} className={classes("bui-form")}>
      <table className={classes("bui-form-table")}>
        <tbody>
          {props.fields.map((f) => (
            <tr className={classes("bui-form-tr")} key={f.name}>
              <td className="bui-form-td">
                <Input
                  label={f.label}
                  type={f.input.type}
                  value={formData[f.name]}
                  onChange={(e) => onInputChange(f.name, e.target.value)}
                />
                <div className={classes("bui-form-error")}>
                  {props.errors[f.name] ? (
                    props.errorsDisplayMode === "first" ? (
                      errorTranslation!(props.errors[f.name][0])
                    ) : (
                      props.errors[f.name].map(errorTranslation!).join()
                    )
                  ) : (
                    <span>&nbsp;</span>
                  )}
                </div>
              </td>
            </tr>
          ))}
          <tr className="bui-form-tr">
            <td className="bui-form-td">{props.buttons}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

Form.defaultProps = {
  errorsDisplayMode: "first",
  errorTranslation: (message: string) => {
    const map: any = {
      required: "必填",
      minLength: "太短",
      maxLength: "太长",
    };
    return map[message] || "未知错误";
  },
};

export default Form;
