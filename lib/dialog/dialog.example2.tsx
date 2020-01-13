import React, { useState } from "react";
import Dialog from "./dialog";

const DialogExample2 = () => {
  const [y, setY] = useState(false);
  return (
    <div>
      <div>
        <h2>Dialog wont close while click mask</h2>
        <p>closeOnClickMask = false</p>
        <button onClick={() => setY(!y)}>click</button>
        <Dialog
          visible={y}
          buttons={[<button>1</button>, <button>2</button>]}
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
