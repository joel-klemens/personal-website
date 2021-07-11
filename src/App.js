import React from 'react';
import TopNavBar from './Components/Navbar/TopNavBar.js';
import styled from 'styled-components';
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import { Route, Switch as Switching } from "react-router";

//main content styles
const MainContentStyled = styled.main`
	position: relative;
	min-height: 100vh;
	background-color: --background-dark-color;
	@media screen and (max-width:1200px){
		margin-left: 0;
	}
	.testText{
		right: 50%;
		height: 50%;
	}
	.main-sectionsContainer{
		scroll-snap-type: y mandatory;
		overflow: auto;
		height: 100vh;
	}
`;

//App function - gets passed to the render in the index.js 
function App() {
	return (
		<div className="App">
			<TopNavBar />
			<MainContentStyled>
				<Switching>
					<Route path="/" exact>
						<div className="main-sectionsContainer">
							<HomePage/>
							<AboutPage/>
						</div>
					</Route>
					<Route path="/resume" exact>
						<ResumePage />
					</Route>
					<Route path="/projects" exact>
						<ContactPage />
					</Route>
					<Route path="/papers" exact>
						<ContactPage />
					</Route>
					<Route path="/contact" exact>
						<ContactPage />
					</Route>
				</Switching>
			</MainContentStyled>
		</div>
	);
	}

export default App;
