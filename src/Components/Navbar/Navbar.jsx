import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	background-color: var(--primary-color);
`;
const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	max-width: 1200px;
	padding: 5px 20px;
	color: #fff;
	overflow: hidden;
`;
const Logo = styled(FontAwesomeIcon)`
	color: #fff;
	font-size: 36px;
	cursor: pointer;
`;
const NavLinks = styled.div`
	display: block;
`;
const MediaStyles = css`
	@media (min-width: 768px) {
		font-size: 18px;
	}
	@media (min-width: 992px) {
		font-size: 20px;
	}
	@media (min-width: 1200px) {
		font-size: 22px;
	}
`;
const NavLink = styled.a`
	${MediaStyles}
	position:relative;
	display: inline-block;
	padding: 10px 20px;
	text-decoration: none;
	color: #fff;
	transition: transform 0.3s;
	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: #fff;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform 0.3s;
	}
	&:hover::after {
		transform-origin: left;
		transform: scaleX(1);
	}
`;

const NavButton = styled.button`
	${MediaStyles}
	padding: 10px 15px;
	color: #fff;
	font-size: 16px;
	background: none;
	border: 1px solid #fff;
	border-radius: 20px;
	transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
	&:hover {
		background-color: #fff;
		color: var(--primary-color);
		box-shadow: 0px 0px 28px rgba(0, 0, 0, 0.4);
	}
`;

const Navbar = () => {
	return (
		<Wrapper>
			<Nav>
				<Logo icon={faSwatchbook} />
				<NavLinks>
					<NavLink href="#about">About Us</NavLink>
					<NavLink href="#services">Services</NavLink>
					<NavLink href="#projects">Projects</NavLink>
					<NavLink href="#contact">Contact</NavLink>
				</NavLinks>
				<NavButton>Register</NavButton>
			</Nav>
		</Wrapper>
	);
};

export default Navbar;
