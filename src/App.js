import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AboutUs from "./Components/AboutUs/AboutUs";
import Countries from "./Components/AboutUs/Countries";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import NavbarMobile from "./Components/Navbar/NavbarMobile";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";

const Wrapper = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 10px 10px 0;
	@media (min-width: 768px) {
		padding: 20px 20px 0;
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
			{!isMobile && <Navbar />}
			{isMobile && <NavbarMobile />}
			<Header />
			<Main>
				<Wrapper>
					<AboutUs />
					<Countries />
					<Services />
					<Projects />
				</Wrapper>
				<Contact />
			</Main>
		</div>
	);
}

export default App;
