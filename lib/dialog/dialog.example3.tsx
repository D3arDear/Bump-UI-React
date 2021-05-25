import React from "react";
import { alert, confirm } from "./dialog";
import Button from "../button/button";

const DialogExample3 = () => {
  return (
    <div>
      <div>
        <h2>Using Dialog pass an alert directive</h2>
        <p> And confirm mode </p>
        <Button onClick={() => alert("1")}>alert</Button>
        <Button
          onClick={() =>
            confirm(
              "1",
              () => {
                console.log("你点击了yes");
              },
              () => {
                console.log("你点击了no");
              }
            )
          }>
          confirm
        </Button>
      </div>
    </div>
  );
};

export default DialogExample3;
