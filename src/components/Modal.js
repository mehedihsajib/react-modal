import React, { useState } from "react";
import ModalContent from "./ModalContent";
import ModalBtn from "./ModalBtn";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div className="container">
        <ModalBtn showModalHandler={showModalHandler} />
        <ModalContent showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
};

export default Modal;
