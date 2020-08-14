import React from "react";
import { ModalWrapper, Backdrop, ModalHeader } from "./styles";

const Modal = ({ children, closeHandler }) => {
	return (
		<>
			<ModalWrapper>
				<ModalHeader >
					<Button style= {{ marginBottom: 10 }} title="Close" onClick={closeHandler}>
						x
					</Button>
				</ModalHeader>
				{children}
			</ModalWrapper>
			<Backdrop onClick={closeHandler} />
		</>
	);
};

export default Modal;

