import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import NavbarMobile from "./Components/Navbar/NavbarMobile";

const Wrapper = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 10px;
	@media (min-width: 768px) {
		padding: 20px;
	}
`;

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
			</Wrapper>
		</div>
	);
}

export default App;
