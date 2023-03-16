import React from "react";
import styled from "styled-components";

const Container = styled.div`
	border-top: 0.5px solid rgba(255, 255, 255, 0.1);
	padding: 10px;
	color: rgba(255, 255, 255, 0.4);
	text-align: center;
`;

const Footer = () => {
	const date = new Date().getFullYear();
	console.log(date);
	return <Container>&copy; Dreamy House {date}</Container>;
};

export default Footer;
