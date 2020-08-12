import React from "react";
import { ModalWrapper, Backdrop, ModalHeader } from "./styles";

const Modal = ({ children, closeHandler, backgroundColor = "#5797ef" }) => {
	return (
		<>
			<ModalWrapper style={{backgroundColor}}>
				<ModalHeader >
					<Button title="Close" onClick={closeHandler}>
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

