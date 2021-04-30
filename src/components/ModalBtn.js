import React from "react";

const ModalBtn = ({ showModalHandler }) => {
  return (
    <>
      <div className="container">
        <button className="showbtn" onClick={showModalHandler}>
          Show Modal
        </button>
      </div>
    </>
  );
};

export default ModalBtn;
