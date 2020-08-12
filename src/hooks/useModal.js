import React, { useState } from "react";

import { ModalWrapper, Backdrop, ModalHeader } from "components/Modal/styles.js";

const useModal = (defaultState = false) => {
  const [diplayModal, setDiplayModal] = useState(defaultState);

  const closeHandler = () => setDiplayModal(false);
  const openHandler = () => setDiplayModal(true);
  const Modal = ({ children, backgroundColor = "#5797ef" }) => {
    return (
      <>
        <ModalWrapper style={{backgroundColor , display: diplayModal ? 'block' :'none'}}>
          <ModalHeader >
            <button title="Close" onClick={closeHandler}>
              x
            </button>
          </ModalHeader>
          {children}
        </ModalWrapper>
        <Backdrop onClick={closeHandler} style={{display: diplayModal ? 'block' :'none'}} />
      </>
    );
  };
  return [Modal, openHandler, closeHandler];
};

export default useModal;
