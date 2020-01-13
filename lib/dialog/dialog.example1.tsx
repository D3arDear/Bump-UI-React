import React, { useState } from "react";
import Dialog from "./dialog";

const DialogExample1 = () => {
  const [x, setX] = useState(false);
  return (
    <div>
      <div>
        <h2>Dialog close while click mask</h2>
        <p>closeOnClickMask = true</p>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog
          visible={x}
          buttons={[<button>1</button>, <button>2</button>]}
          onClose={() => {
            setX(false);
          }}
          closeOnClickMask={true}
        >
          <strong>hi</strong>
        </Dialog>
      </div>
    </div>
  );
};

export default DialogExample1;
