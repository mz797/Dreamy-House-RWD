import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSwatchbook,
	faBars,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 5px 20px;
	background-color: var(--primary-color);
	border-radius: 10px;
	color: #fff;
	font-size: 18px;
`;
const Logo = styled(FontAwesomeIcon)`
	color: #fff;
	font-size: 32px;
	cursor: pointer;
`;
const MenuIcon = styled(FontAwesomeIcon)``;

const NavButton = styled.button`
	padding: 7px 14px;
	color: #fff;
	font-size: 24px;
	background: none;
	border: none;
`;

const NavbarMobile = () => {
	return (
		<Nav>
			<Logo icon={faSwatchbook} />
			<NavButton>
				<MenuIcon icon={faBars} />
			</NavButton>
		</Nav>
	);
};

export default NavbarMobile;
