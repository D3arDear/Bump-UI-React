import React from "react";
// 必须引入 react
// 因为 <div a="1">hi</div> 相当于 react.createElement("div",{a:"1"},"hi")
function Button() {
  return <div>按钮</div>;
}

export default Button;
