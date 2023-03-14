import React from "react";
import styled from "styled-components";
import PolandImg from "../../Images/pl.png";
import ItalyImg from "../../Images/italy.png";
import GermanImg from "../../Images/german.jfif";
import FranceImg from "../../Images/france.png";
import JapanImg from "../../Images/japan.png";
import UkImg from "../../Images/uk.png";

const Container = styled.div`
	padding: 40px 20px;
`;
const Heading = styled.h3`
	margin-bottom: 30px;
	font-size: 32px;
	color: var(--primary-color);
	text-align: center;
`;
const CardBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 10px;
	padding: 20px 30px;
	background-color: var(--light-gray);
	border-radius: 10px;
`;
const CardImage = styled.div`
	width: 70px;
	height: 50px;
	background-image: url(${(props) => props.image});
	background-size: cover;
	background-position: center;
`;
const CardTitle = styled.p`
	margin: 10px;
    font-size: 16px;
	color: var(--primary-color);
`;
const CardText = styled.p`
	margin: 10px 0 0;
	font-size: 12px;
	color: var(--primary-color);
`;
const Countries = () => {
	return (
		<Container>
			<Heading>We work in 6 countries!</Heading>
			<CardBox>
				<Card>
					<CardImage image={PolandImg} />
					<CardTitle>Poland</CardTitle>
                    <CardText>9 Locations</CardText>
				</Card>
				<Card>
					<CardImage image={ItalyImg} />
					<CardTitle>Italy</CardTitle>
                    <CardText>7 Locations</CardText>
				</Card>
				<Card>
					<CardImage image={GermanImg} />
					<CardTitle>German</CardTitle>
                    <CardText>3 Locations</CardText>
				</Card>
				<Card>
					<CardImage image={FranceImg} />
					<CardTitle>France</CardTitle>
                    <CardText>4 Locations</CardText>
				</Card>
				<Card>
					<CardImage image={JapanImg} />
					<CardTitle>Japan</CardTitle>
                    <CardText>3 Locations</CardText>
				</Card>
				<Card>
					<CardImage image={UkImg} />
					<CardTitle>UK</CardTitle>
                    <CardText>7 Locations</CardText>
				</Card>
			</CardBox>
		</Container>
	);
};

export default Countries;
