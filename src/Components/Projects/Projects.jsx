import React from "react";
import styled from "styled-components";
import ProjectList from "./ProjectList";

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
		margin-bottom: 40px;
	}
	@media (min-width: 992px) {
		font-size: 46px;
		margin-bottom: 50px;
	}
`;
const Buttons = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
const Button = styled.button`
	margin: 5px;
	padding: 7px 14px;
	background: none;
	border-radius: 20px;
	border: 1px solid var(--primary-color);
	cursor: pointer;
	transition: color 0.3s, background 0.3s;
	&:hover,
	&:focus {
		outline: none;
		color: #fff;
		background-color: var(--primary-color);
	}
	@media (min-width: 576px) {
		font-size: 15px;
	}
	@media (min-width: 786px) {
		font-size: 16px;
	}
	@media (min-width: 992px) {
		font-size: 18px;
	}
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
			<ProjectList />
		</Container>
	);
};

export default Projects;
