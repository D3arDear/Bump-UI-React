import React, { useState } from "react";
import Dialog from "./dialog";
import Button from "../button/button";

const DialogExample2 = () => {
  const [y, setY] = useState(false);
  return (
    <div>
      <div>
        <h2>Dialog wont close while click mask</h2>
        <p>closeOnClickMask = false</p>
        <Button onClick={() => setY(!y)}>click</Button>
        <Dialog
          visible={y}
          buttons={[<Button>1</Button>, <Button>2</Button>]}
          onClose={() => {
            setY(false);
          }}
        >
          <strong>hi</strong>
        </Dialog>
      </div>
    </div>
  );
};

export default DialogExample2;
