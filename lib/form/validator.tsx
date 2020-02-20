import { FormValue } from "./form";
interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validator?: (value: string) => Promise<string>;
}
type FormRules = Array<FormRule>;

// interface FormErrors {
//   [K: string]: string[];
// }

type OneError = string | Promise<string>;

function isEmpty(value: any) {
  return value === undefined || value === null || value === "";
}

const Validator = (formValue: FormValue, rules: FormRules, callback: (errors: any) => void): void => {
  let errors: any = {};
  const addError = (key: string, error: OneError) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(error);
  };
  rules.map((rule) => {
    const value = formValue[rule.key];
    if (rule.validator) {
      // 自定义校验器
      const promise = rule.validator(value);
      addError(rule.key, promise);
    }
    if (rule.required && isEmpty(value)) {
      addError(rule.key, "required");
    }
    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      addError(rule.key, "minLength");
    }
    if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
      addError(rule.key, "maxLength");
    }
    if (rule.pattern) {
      if (!rule.pattern.test(value)) {
        addError(rule.key, "pattern");
      }
    }
  });
  const flattenErrors = flat(Object.keys(errors).map((key) => errors[key].map((promise: Promise<string>) => [key, promise])););
  const newPromises = flattenErrors.map(([key, promiseOrString]) =>
    (promiseOrString instanceof Promise ? promiseOrString : Promise.reject(promiseOrString)).then(
      () =>  [key, undefined],
      (reason: string) => [key, reason],
    ),
  );
  Promise.all(newPromises).then((results) => {
    callback(zip(results.filter((item) => item[1])));
  });
};
export default Validator;

function flat(array: Array<any>) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      result.push(...array[i]);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

// hashList = [['username', 'error1], ['username', 'error2'], ['password','error1']]
function zip(hashList: Array<[string, string]>) {
  const result = {};
  hashList.map(([key, value]) => {
    result[key] = result[key] || [];
    result[key].push(value);
  });
  return result;
}

// function fromEntries(array: Array<[string, string[]]>) {
//   const result: { [key: string]: string[] } = {};
//   for (let i = 0; i < array.length; i++) {
//     result[array[i][0]] = array[i][1];
//   }
//   return result;
// }
