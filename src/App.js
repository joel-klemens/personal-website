import React, { useState, useEffect } from 'react';
import TopNavBar from './Components/Navbar/TopNavBar.js';
import GlobalStyles from './Styles/GlobalStyles.js';
import styled from 'styled-components';
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import Section from './Components/Section'; 
//images
import hikeFernie from './images/hike-fernie.jpg';
import hikeFernieLedge from './images/hike-fernie-ledge.JPG';
import surfSunset from './images/surf-sunset-2.JPG.png';
import climbing from './images/climbing.jpg'
//import Switch from '@material-ui/core/Switch';
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

//App function - 
function App() {
	return (
		<div className="App">
			<TopNavBar />
			<MainContentStyled>
				<Switching>
					<Route path="/" exact>
						<div className="main-sectionsContainer">
							<HomePage />
							<AboutPage /> 
						</div>
					</Route>
						<Route path="/about" exact>
						<AboutPage />
					</Route>
					{/* <Route path="/resume" exact>
						<ResumePage />
					</Route> */}
					<Route path="/contact" exact>
						<ContactPage />
					</Route>
				</Switching>
			</MainContentStyled>
		</div>
	);
	}

export default App;
