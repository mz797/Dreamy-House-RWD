import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 5px 20px;
	background-color: var(--primary-color);
	border-radius: 10px;
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
	display: inline-block;
	padding: 10px 20px;
	text-decoration: none;
	color: #fff;
	transition: transform 0.3s;
	&:hover {
		transform: scale(1.05);
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

		/* font-weight: bold; */
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<Logo icon={faSwatchbook} />
			<NavLinks>
				<NavLink href="#Home">Home</NavLink>
				<NavLink href="#Services">Services</NavLink>
				<NavLink href="#Projects">Projects</NavLink>
				<NavLink href="#Contact">Contact</NavLink>
			</NavLinks>
			<NavButton>Register</NavButton>
		</Nav>
	);
};

export default Navbar;
