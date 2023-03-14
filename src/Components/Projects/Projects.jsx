import React from "react";
import styled from "styled-components";

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
const Buttons = styled.div``;
const Button = styled.button`
	padding: 7px 14px;
    border-radius:20px;
	border: 2px solid var(--primary-color);
`;
const Projects = () => {
	return (
		<Container id="projects">
			<Heading>Our Projects</Heading>
			<Buttons>
				<Button>House Design</Button>
				<Button>Apartament Design</Button>
				<Button>Office Interior</Button>
				<Button>Bathroom Interior</Button>
				<Button>Kitchen Interior</Button>
			</Buttons>
		</Container>
	);
};

export default Projects;
