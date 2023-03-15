import React from "react";
import styled from "styled-components";
import InfoBox from "./InfoBox";
import MeetBox from "./MeetBox";

const Container = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 40px 0 120px;
`;
const About = styled.div`
	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		padding: 20px 0;
	}
	@media (min-width: 992px) {
		padding: 40px 0;
	}
`;
const AboutText = styled.div`
	@media (min-width: 768px) {
		padding: 15px 30px 30px 50px;
		width: 60%;
	}
`;
const Heading = styled.h2`
	color: var(--primary-color);
	font-size: 38px;
	padding: 10px;
	text-align: center;
	@media (min-width: 576px) {
		font-size: 40px;
	}
	@media (min-width: 768px) {
		font-size: 42px;
		text-align: left;
	}
	@media (min-width: 992px) {
		font-size: 46px;
	}
`;
const Description = styled.p`
	margin-bottom: 10px;
	padding: 10px;
	font-size: 16px;
	color: var(--primary-color);
	@media (min-width: 576px) {
		font-size: 18px;
	}
	@media (min-width: 768px) {
		font-size: 20px;
	}
	@media (min-width: 992px) {
		font-size: 24px;
	}
`;
const InfoContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-bottom: 40px;
	@media (min-width: 768px) {
		width: 40%;
	}
	
`;
const ParamBox = styled.div`
	display: flex;
	align-items: end;
	justify-content: center;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 200px;
	background-color: var(--primary-color);
	border-radius: 10px;
	z-index: -1;
	@media (min-width: 768px) {
		height: 240px;
	}
`;
const ParamBoxContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px 30px;
	height: 120px;
	@media (min-width: 768px) {
		padding: 20px 40px;
	}
`;
const ParamBoxText = styled.p`
	font-size: 16px;
	letter-spacing: 1.5px;
	text-align: center;
	color: #fff;
	text-transform: uppercase;
	font-weight: 700;
	z-index: 0;
	@media (min-width: 400px) {
		font-size: 18px;
	}
	@media (min-width: 576px) {
		font-size: 20px;
	}
	@media (min-width: 768px) {
		font-size: 22px;
	}
	@media (min-width: 992px) {
		font-size: 26px;
	}
`;

const AboutUs = () => {
	return (
		<Container id="about">
			<About>
				<AboutText>
					<Heading>About Our Company</Heading>
					<Description>
						Dream House is one of the top websites that has been
						helping milians people find their dream homes. Lorem
						ipsum dolor sit amet consectetur adipisicing elit.
					</Description>
				</AboutText>
				<InfoContainer>
					<InfoBox left="10+" right="Years Of Experience" />
					<InfoBox left="345" right="Projects Complited" />
					<InfoBox left="24" right="Awardes Gained" />
					<InfoBox left="2.5k" right="Happy Consumers" />
				</InfoContainer>
			</About>
			<MeetBox />
			<ParamBox>
				<ParamBoxContent>
					<ParamBoxText>
						It doesen't matter who you are or where you are, the
						bottom line is telling you to come home
					</ParamBoxText>
				</ParamBoxContent>
			</ParamBox>
		</Container>
	);
};

export default AboutUs;
