import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import meetImg from "../../Images/meet.jpg";
const Container = styled.div`
	position: relative;
	width: 80%;
	height: fit-content;
	background-color: var(--light-gray);
	border-radius: 15px;
	overflow: hidden;
	z-index: 0;
	@media (min-width: 576px) {
		display: flex;
	}
`;
const ImageBox = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;

	background-image: url(${meetImg});
	background-size: cover;
	background-position: center;
	opacity: 0.2;
	z-index: -1;
	@media (min-width: 576px) {
		position: relative;
		height: auto;
		max-width: 40%;
		opacity: 1;
	}
`;
const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 25px;
	z-index: 100;
	@media (min-width: 768px) {
		padding: 25px 30px;
	}
	@media (min-width: 768px) {
		padding: 30px 35px;
	}
`;
const Title = styled.h3`
	margin-bottom: 15px;
	font-size: 24px;
	text-align: center;
	color: var(--primary-color);
	@media (min-width: 576px) {
		font-size: 26px;
	}
	@media (min-width: 768px) {
		font-size: 28px;
	}
	@media (min-width: 992px) {
		font-size: 32px;
	}
`;
const MediaStyle = css`
	@media (min-width: 576px) {
		font-size: 18px;
	}
	@media (min-width: 768px) {
		font-size: 20px;
	}
	@media (min-width: 992px) {
		font-size: 22px;
	}
`;
const Description = styled.p`
	${MediaStyle}
	margin-bottom: 10px;
	text-align: center;
	color: var(--primary-color);
`;
const Button = styled.button`
	${MediaStyle}
	padding: 7px 14px;
	background-color: var(--primary-color);
	border: 2px solid transparent;
	border-radius: 5px;
	color: #fff;
	transition: transform 0.3s;
	cursor: pointer;
	&:hover {
		transform: scale(1.05);
	}
`;
const ButtonIcon = styled(FontAwesomeIcon)`
	margin-left: 5px;
`;
const MeetBox = () => {
	return (
		<Container>
			<ImageBox />
			<TextBox>
				<Title>Meet our professional consultant for free!</Title>
				<Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Tempora nisi qui et!{" "}
				</Description>
				<Button>
					Contact Now
					<ButtonIcon icon={faArrowRight} />
				</Button>
			</TextBox>
		</Container>
	);
};

export default MeetBox;
