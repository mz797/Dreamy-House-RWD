import React from "react";
import styled, { css } from "styled-components";
import headerSmall from "../../Images/header-small.jpg";
import headerBig from "../../Images/header-big.jpg";

const Container = styled.header`
	position: relative;
	margin: 10px 0;
	height: 85vh;
	min-height: 400px;
	width: 100%;
	background-image: url(${headerSmall});
	background-size: cover;
	border-radius: 10px;
	overflow: hidden;
	@media (min-width: 992px) {
		background-image: url(${headerBig});
	}
`;
const CommonStyles = css`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;
const BackgroundShadow = styled.div`
	${CommonStyles}
	background-color: var(--primary-color);
	opacity: 0.7;
`;
const Wrapper = styled.div`
	${CommonStyles}
`;
const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 40px;
	max-width: 1200px;
	margin: 0 auto;
	height: 100%;
	color: #fff;
	@media (min-width: 768px) {
		flex-direction: row;
		gap: 40px;
	} ;
`;
const Heading = styled.h1`
	margin-bottom: 20px;
	font-size: 36px;
	@media (min-width: 576px) {
		font-size: 42px;
	}
	@media (min-width: 768px) {
		width: 40%;
		font-size: 48px;
	}
	@media (min-width: 992px) {
		font-size: 56px;
	} ;
`;
const DescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 768px) {
		width: 60%;
	} ;
`;
const Description = styled.p`
	margin-bottom: 20px;
	text-align: justify;
	font-size: 18px;
	@media (min-width: 576px) {
		font-size: 20px;
	}
	@media (min-width: 768px) {
		font-size: 24px;
	}
	@media (min-width: 992px) {
		font-size: 28px;
	} ;
`;
const Button = styled.button`
	display: inline-block;
	padding: 10px 20px;
	color: #fff;
	border: 3px solid transparent;
	border-radius: 15px;
	background-color: var(--secondary-color);
	font-size: 18px;
	cursor: pointer;
	transition: 0.3s;
	&:hover,
	&:focus {
		outline: none;
		border: 3px solid #fff;
		transform: scale(1.05);
	}
	@media (min-width: 576px) {
		font-size: 20px;
	}
	@media (min-width: 768px) {
		font-size: 24px;
	}
	@media (min-width: 992px) {
		font-size: 28px;
	} ;
`;
const Header = () => {
	return (
		<Container>
			<BackgroundShadow />
			<Wrapper>
				<TextContainer>
					<Heading>Easiest way to find your best dream place</Heading>
					<DescriptionContainer>
						<Description>
							A trusted partner in the world of real estate. Our
							team of expirienced professionals dedicated to
							helping you unloke dor to your dream house.
						</Description>
						<Button>Discover Now</Button>
					</DescriptionContainer>
				</TextContainer>
			</Wrapper>
		</Container>
	);
};

export default Header;
