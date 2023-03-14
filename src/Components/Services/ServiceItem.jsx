import React from "react";
import styled from "styled-components";

const Item = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	margin-bottom: 30px;
	text-align: center;
	color: var(--primary-color);
	@media (min-width: 576px) {
		flex-direction: row;
	}
`;
const ItemText = styled.div`
	@media (min-width: 900px) {
		display: grid;
		grid-template-columns: 2fr 3fr 0.7fr;
		gap: 20px;
		align-items: center;
		padding: 30px 0;
	}
`;
const ItemImage = styled.div`
	margin-bottom: 15px;
	position: relative;
	width: 100%;
	height: 100px;
	background-image: url(${(props) => props.image});
	background-position: center;
	background-size: cover;
	@media (min-width: 576px) {
		height: auto;
		margin: 0 10px 0;
	}
`;

const ItemTitle = styled.p`
	margin-bottom: 10px;
	font-size: 20px;
	font-weight: 700;
	@media (min-width: 576px) {
		font-size: 22px;
	}
	@media (min-width: 768px) {
		font-size: 24px;
	}
	@media (min-width: 900px) {
		text-align: right;
	}
	@media (min-width: 992px) {
		font-size: 26px;
	}
`;
const ItemDescription = styled.p`
	margin-bottom: 10px;
	font-weight: 300;
	@media (min-width: 576px) {
		font-size: 18px;
	}
	@media (min-width: 768px) {
		font-size: 20px;
	}
	@media (min-width: 900px) {
		text-align: left;
	}
	@media (min-width: 992px) {
		font-size: 22px;
	}
`;
const ItemButton = styled.button`
	align-self: center;
	width: 40px;
	height: 40px;
	border: none;
	border-radius: 50%;
	background-color: var(--secondary-color);
	color: #fff;
	cursor: pointer;
	@media (min-width: 900px) {
		margin: 15px;
	}
`;
const ServiceItem = ({ image, title }) => {
	return (
		<Item>
			<ItemImage image={image} />
			<ItemText>
				<ItemTitle>{title}</ItemTitle>
				<ItemDescription>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Illo laboriosam sit aliquid neque quisquam quis nihil fugiat
					explicabo.
				</ItemDescription>
				<ItemButton>
					<i class="fa-solid fa-arrow-right"></i>
				</ItemButton>
			</ItemText>
		</Item>
	);
};

export default ServiceItem;
