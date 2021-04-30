import React from "react";

const ModalContent = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <div className="modal__wrapper">
          <div className="modal">
            <div className="modal__img"></div>
            <div className="modal__content">
              <h2>Simple Modal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                nesciunt, soluta accusantium tempore minus et?
              </p>
            </div>
            <button
              className="close-btn"
              onClick={() => setShowModal((prev) => !prev)}
            >
              X
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalContent;
