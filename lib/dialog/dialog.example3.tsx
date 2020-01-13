import React from "react";
import { alert, confirm } from "./dialog";

const DialogExample3 = () => {
  return (
    <div>
      <div>
        <h2>Using Dialog pass an alert directive</h2>
        <p> And confirm mode </p>
        <button onClick={() => alert("1")}>alert</button>
        <button
          onClick={() =>
            confirm(
              "1",
              () => {
                console.log("你点击了yes");
              },
              () => {
                console.log("你点击了no");
              },
            )
          }
        >
          confirm
        </button>
      </div>
    </div>
  );
};

export default DialogExample3;
