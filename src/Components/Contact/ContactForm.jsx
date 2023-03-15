import React from "react";
import styled, { css } from "styled-components";

const Form = styled.form`
	display: grid;
	padding: 20px;
	max-width: 800px;
	margin: 0 auto;
	@media (min-width: 576px) {
		grid-template-columns: 1fr 1fr;
		gap: 10px;
	}
`;
const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	&:last-of-type {
		@media (min-width: 576px) {
			grid-column: 1/-1;
		}
	}
`;
const Label = styled.label`
	margin-bottom: 5px;
	color: rgba(255, 255, 255, 0.6);
	@media (min-width: 768px) {
		font-size: 18px;
	}
	@media (min-width: 992px) {
		font-size: 20px;
	}
`;
const CommonInputStyle = css`
	margin-bottom: 10px;
	padding: 5px 10px;
	border-radius: 5px;
	border: 1px solid #fff;
	background: none;
	color: #fff;
	@media (min-width: 768px) {
		font-size: 18px;
	}
    @media (min-width: 992px) {
		font-size: 20px;
	}
`;
const Input = styled.input`
	${CommonInputStyle}
`;
const TextArea = styled.textarea`
	${CommonInputStyle}
	min-height:50px;
	resize: vertical;
`;
const Button = styled.button`
	${CommonInputStyle}
	border: 1px solid #fff;
	background: #fff;
	color: var(--primary-color);
	font-weight: 700;
	cursor: pointer;
	@media (min-width: 576px) {
		grid-column: 1/-1;
	}
`;
const ContactForm = () => {
	return (
		<Form>
			<FormGroup>
				<Label>Name:</Label>
				<Input />
			</FormGroup>
			<FormGroup>
				<Label>Email:</Label>
				<Input />
			</FormGroup>
			<FormGroup>
				<Label>Message:</Label>
				<TextArea />
			</FormGroup>
			<Button>Send</Button>
		</Form>
	);
};

export default ContactForm;
