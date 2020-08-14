import React, { useState } from "react";

import { ModalWrapper, Backdrop, ModalHeader } from "components/Modal/styles.js";

const useModal = (defaultState = false) => {
  const [diplayModal, setDiplayModal] = useState(defaultState);

  const closeHandler = () => setDiplayModal(false);
  const openHandler = () => setDiplayModal(true);
  const Modal = ({children}) => {
    return (
      <>
        <ModalWrapper  style={{display: diplayModal ? 'block' :'none'}}>
          <ModalHeader >
            <button  style= {{ marginBottom: 10 }} title="Close" onClick={closeHandler}>
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
