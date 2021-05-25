import React, { useState } from "react";
import Dialog from "./dialog";
import Button from "../button/button";

const DialogExample1 = () => {
  const [x, setX] = useState(false);
  return (
    <div>
      <div>
        <h2>Dialog close while click mask</h2>
        <p>closeOnClickMask = true</p>
        <Button onClick={() => setX(!x)}>click</Button>
        <Dialog
          visible={x}
          buttons={[<Button>点了</Button>, <Button level="primary">没有用</Button>]}
          onClose={() => {
            setX(false);
          }}
          closeOnClickMask={true}>
          <strong>hi</strong>
        </Dialog>
      </div>
    </div>
  );
};

export default DialogExample1;
