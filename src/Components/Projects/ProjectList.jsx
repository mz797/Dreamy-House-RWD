import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import project2 from "../../Images/project2.jpg";
import project1 from "../../Images/project1.jpg";
import project3 from "../../Images/project3.jpg";
import project4 from "../../Images/project4.jpg";
import project5 from "../../Images/project5.jpg";
import project6 from "../../Images/project6.jpg";

const Container = styled.div`
	margin: 40px 10px;
	display: grid;
	grid-template-columns: 1fr;
	gap: 15px;
	@media (min-width: 576px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;
const Item = styled.div`
	position: relative;
	height: 200px;
	/* max-width: 300px; */
	background-image: url(${(props) => props.img});
	background-size: cover;
	background-position: center;
	z-index: 0;
`;
const ItemHover = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	opacity: 0;
	transition: opacity 0.4s;
	&:hover {
		opacity: 1;
	}
`;
const ItemHoverTitle = styled.p`
	color: rgba(255, 255, 255, 0.6);
	font-size: 32px;
	font-weight: 700;
`;

const ItemHoverIcon = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	right: 0;
	width: 50px;
	height: 50px;
	border: none;
	background-color: var(--secondary-color);
	color: #fff;
	font-size: 24px;
	z-index: 50;
	cursor: pointer;
`;

const ProjectList = () => {
	return (
		<Container>
			<Item img={project1}>
				<ItemHover>
					<ItemHoverTitle>2023</ItemHoverTitle>
					<ItemHoverIcon>
						<FontAwesomeIcon icon={faArrowRight} />
					</ItemHoverIcon>
				</ItemHover>
			</Item>
			<Item img={project2}>
				<ItemHover>
					<ItemHoverTitle>2023</ItemHoverTitle>
					<ItemHoverIcon>
						<FontAwesomeIcon icon={faArrowRight} />
					</ItemHoverIcon>
				</ItemHover>
			</Item>
			<Item img={project3}>
				<ItemHover>
					<ItemHoverTitle>2022</ItemHoverTitle>
					<ItemHoverIcon>
						<FontAwesomeIcon icon={faArrowRight} />
					</ItemHoverIcon>
				</ItemHover>
			</Item>
			<Item img={project4}>
				<ItemHover>
					<ItemHoverTitle>2023</ItemHoverTitle>
					<ItemHoverIcon>
						<FontAwesomeIcon icon={faArrowRight} />
					</ItemHoverIcon>
				</ItemHover>
			</Item>
			<Item img={project5}>
				<ItemHover>
					<ItemHoverTitle>2022</ItemHoverTitle>
					<ItemHoverIcon>
						<FontAwesomeIcon icon={faArrowRight} />
					</ItemHoverIcon>
				</ItemHover>
			</Item>
			<Item img={project6}>
				<ItemHover>
					<ItemHoverTitle>2023</ItemHoverTitle>
					<ItemHoverIcon>
						<FontAwesomeIcon icon={faArrowRight} />
					</ItemHoverIcon>
				</ItemHover>
			</Item>
		</Container>
	);
};

export default ProjectList;
