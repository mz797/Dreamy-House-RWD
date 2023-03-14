import React from "react";
import styled, { css } from "styled-components";
import headerSmall from "../../Images/header-small.jpg";
import headerBig from "../../Images/header-big.jpg";

const Container = styled.header`
	position: relative;
	margin: 20px 0;
	height: 80vh;
	width: 100%;
	background-image: url(${headerSmall});
	background-size: cover;
	border-radius: 10px;
	overflow: hidden;
	@media (min-width: 992px) {
		background-image: url(${headerBig});
	}
`;
const ComonStyles = css`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;
const BackgroundShadow = styled.div`
	${ComonStyles}
	background-color: var(--primary-color);
	opacity: 0.3;
`;
const TextContainer = styled.div`
	${ComonStyles}
	display:flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 40px;

	color: #fff;
`;
const Heading = styled.h1`
	margin-bottom: 20px;
	font-size: 42px;
`;
const Description = styled.p`
	margin-bottom: 15px;
	text-align: justify;
	font-size: 20px;
`;
const Button = styled.button`
	display: inline-block;
	padding: 10px 20px;
	color: #fff;
	border: 3px solid transparent;
	border-radius: 15px;
	background-color: var(--secondary-color);
	font-size: 20px;
	cursor: pointer;
	transition: 0.3s;
	&:hover,
	&:focus {
		outline: none;
		background-color: #fff;
		border: 3px solid var(--secondary-color);
		color: var(--secondary-color);
		transform: scale(1.05);
	}
`;
const Header = () => {
	return (
		<Container>
			<BackgroundShadow />
			<TextContainer>
				<Heading>Easiest way to find your best dream place</Heading>
				<Description>
					A trusted partner in the world of real estate. Our team of
					expirienced professionals dedicated to helping you unloke
					dor to your dream house.
				</Description>
				<Button>Discover Now</Button>
			</TextContainer>
		</Container>
	);
};

export default Header;
