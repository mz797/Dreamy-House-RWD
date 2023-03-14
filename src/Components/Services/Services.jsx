import React from "react";
import styled from "styled-components";
import Service1 from "../../Images/Service1.jpg";
import Service2 from "../../Images/Service2.jpg";
import Service3 from "../../Images/Service3.jpg";
import ServiceItem from "./ServiceItem";

const Container = styled.section`
	padding: 40px 0;
`;
const Heading = styled.h2`
	margin-bottom: 30px;
	color: var(--primary-color);
	font-size: 38px;
	text-align: center;
	@media (min-width: 576px) {
		font-size: 40px;
	}
	@media (min-width: 786px) {
		font-size: 42px;
	}
	@media (min-width: 992px) {
		font-size: 46px;
	}
`;

const Services = () => {
	return (
		<Container id="services">
			<Heading>Our Services</Heading>
			<ServiceItem image={Service1} title="Design and performance" />
			<ServiceItem image={Service2} title="Architecture and interior" />
			<ServiceItem image={Service3} title="Furniture Production" />
		</Container>
	);
};

export default Services;
