import React from "react";
import { modal } from "./dialog";
import Button from "../button/button";

const DialogExample4 = () => {
  const openModal = () => {
    const close = modal(
      <h1>
        hello<Button onClick={() => close()}>close</Button>
      </h1>
    );
  };
  return (
    <div>
      <div>
        <h2>modal mode</h2>
        <Button onClick={openModal}>modal</Button>
      </div>
    </div>
  );
};

export default DialogExample4;
