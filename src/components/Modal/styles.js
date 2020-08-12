import styled from 'styled-components';

export const ModalWrapper = styled.div`
	position: absolute;
	top: 22.5vh;
	left: 37.5vw;
	width: 18vw;
	max-height: 50vh;
	overflow-y: auto;
	overflow-x: hidden;
	padding: 2.5vh 1.5vw 5vh;
	background-color: white;
	z-index: 3;
	border-radius: 4px;
	box-shadow: 3px 4px 7px -1px rgba(0, 0, 0, 0.75);
	-webkit-box-shadow: 3px 4px 7px -1px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 3px 4px 7px -1px rgba(0, 0, 0, 0.75);
	animation-duration: 10s;
`;

export const Backdrop = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
z-index: 2;
background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalHeader = styled.div`
	display: flex;
	justify-content: flex-end;

.modalHeader button {
	font-size: 0.8em;
	background-color: white;
	border: 0.5px solid lightgray;
	border-radius: 2px;
}

.modalHeader button:hover {
	cursor: pointer;
	font-weight: bold;
	color: white;
	background-color: #2e75b3;
}
`;

