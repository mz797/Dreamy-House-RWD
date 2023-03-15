import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faTwitter,
	faLinkedinIn,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./ContactForm";
import Footer from "../Footer/Footer";
const CommonFlexStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Container = styled.section`
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	background-color: var(--primary-color);
	color: #fff;
	max-width: 1200px;
	margin: 0 auto;
`;
const Icons = styled.div`
	display: none;
	@media (min-width: 576px) {
		${CommonFlexStyle}
		position: relative;
		padding: 30px 0;
	}
`;
const CommonLinesStyle = css`
	position: absolute;
	top: 50%;
	width: 30%;
	height: 1px;
	background-color: #fff;
	&::after {
		content: "";
		position: absolute;
		top: -3px;
		width: 7px;
		height: 7px;
		background-color: #fff;
		border-radius: 50%;
	}
`;
const IconsLineLeft = styled.div`
	${CommonLinesStyle}
	left: 0;
	&::after {
		right: 0;
	}
`;
const IconsLineRight = styled.div`
	${CommonLinesStyle}
	right: 0;
	&::after {
		left: 0;
	}
`;
const IconButton = styled.a`
	${CommonFlexStyle}
	margin: 10px;
	width: 30px;
	height: 30px;
	color: var(--primary-color);
	border-radius: 50%;
	background-color: #fff;
	cursor: pointer;
	@media (min-width: 992px) {
		width: 40px;
		height: 40px;
	}
`;
const Icon = styled(FontAwesomeIcon)`
	@media (min-width: 992px) {
		font-size: 18px;
	}
`;
const Title = styled.p`
	padding: 40px 40px 0;
	font-size: 28px;
	font-weight: 900;
	text-align: center;
	text-transform: uppercase;
	@media (min-width: 576px) {
		padding-top: 0;
	}
	@media (min-width: 768px) {
		padding: 10px 0;
		font-size: 34px;
	}
	@media (min-width: 992px) {
		padding: 20px 0;
		font-size: 40px;
	}
`;

const Contact = () => {
	return (
		<Container id="contact">
			<Icons>
				<IconButton href="https://facebook.com">
					<Icon icon={faFacebookF} />
				</IconButton>
				<IconButton href="https://facebook.com">
					<Icon icon={faTwitter} />
				</IconButton>
				<IconButton href="https://facebook.com">
					<Icon icon={faLinkedinIn} />
				</IconButton>
				<IconButton href="https://facebook.com">
					<Icon icon={faInstagram} />
				</IconButton>
				<IconsLineLeft />
				<IconsLineRight />
			</Icons>
			<Title>Let's discuss your ideas</Title>
			<ContactForm />
			<Footer />
		</Container>
	);
};

export default Contact;
