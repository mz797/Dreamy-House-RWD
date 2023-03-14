import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AboutUs from "./Components/AboutUs/AboutUs";
import Countries from "./Components/AboutUs/Countries";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import NavbarMobile from "./Components/Navbar/NavbarMobile";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";

const Wrapper = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 10px;
	@media (min-width: 768px) {
		padding: 20px;
	}
`;
const Main = styled.main``;

function App() {
	const [isMobile, setIsMobile] = useState();
	const handleResize = () => {
		if (window.innerWidth < 700) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};
	useEffect(() => {
		handleResize();
	}, []);
	window.addEventListener("resize", handleResize);
	return (
		<div className="App">
			<Wrapper>
				{!isMobile && <Navbar />}
				{isMobile && <NavbarMobile />}
				<Header />
				<Main>
					<AboutUs />
					<Countries />
					<Services />
					<Projects />
				</Main>
			</Wrapper>
		</div>
	);
}

export default App;
