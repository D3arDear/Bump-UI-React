import React from "react";
import { modal } from "./dialog";

const DialogExample4 = () => {
  const openModal = () => {
    const close = modal(
      <h1>
        hello<button onClick={() => close()}>close</button>
      </h1>,
    );
  };
  return (
    <div>
      <div>
        <h2>modal mode</h2>
        <button onClick={openModal}>modal</button>
      </div>
    </div>
  );
};

export default DialogExample4;
