import React from "react";
import styled from "styled-components";
const Container = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 5px;
	padding: 3px 15px;
	width: 150px;
	border: 1px solid var(--primary-color);
	border-radius: 35px;
	@media (min-width: 576px) {
		width: 170px;
	}
	@media (min-width: 768px) {
		width: 200px;
	}
`;
const Left = styled.div`
	font-size: 20px;
	@media (min-width: 576px) {
		font-size: 25px;
	}
`;
const Right = styled.div`
	padding: 0 5px;
	text-align: center;
	font-size: 14px;
	letter-spacing: 1.5px;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`;
const InfoBox = ({ left, right }) => {
	return (
		<Container>
			<Left>{left}</Left>
			<Right>{right}</Right>
		</Container>
	);
};

export default InfoBox;
