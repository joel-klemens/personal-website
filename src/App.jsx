import React, { useState, useMemo, useEffect } from "react";
import TopNavBar from './Components/Navbar/TopNavBar.js';
import styled from 'styled-components';
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import { Route, Switch as Switching } from "react-router";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import  { Auth } from 'aws-amplify';
import SignInPage from "./Components/Authentication/SignInPage.js";
import SignUpPage from "./Components/Authentication/SignUpPage.js";
import { UserContext } from './Components/Context/UserContext'
import ProjectsPage from "./pages/ProjectsPage.js";

Amplify.configure(awsconfig);

//main content styles
const MainContentStyled = styled.main`
	position: relative;
	scroll-snap-type: y mandatory;
	overflow-y: auto;
	overflow-x: hidden;
	height: 100vh;
	scroll-snap-type: y mandatory;
	overflow-y: auto;
	overflow-x: hidden;
	background-color: --background-dark-color;
	@media screen and (max-width:1200px){
		margin-left: 0;
	}
	.testText{
		right: 50%;
		height: 50%;
	}
	.main-sectionsContainer{
		/* scroll-snap-type: y mandatory;
		overflow-y: auto;
		overflow-x: hidden; */
		//height: 100vh;
	}
`;

//App function - gets passed to the render in the index.js 
function App() {
	//user context 
	const [loggedIn, setloggedIn] = useState(false);  
	const value = useMemo(() => ({ loggedIn, setloggedIn}), [loggedIn, setloggedIn]); 

	//find out if the user is logged in
	useEffect(() => {
        AssessLoggedInState() 
    }, []) 
	//update logged in state
    const AssessLoggedInState = () => {
        Auth.currentAuthenticatedUser()
            .then(user => {
                //console.log('set state logged in:',user); 
                setloggedIn(true);
            })
            .catch(() => {
                //console.log('set state logged out'); 
                setloggedIn(false); 
            });
    };
	const onSignIn = () => {
        //console.log('Signed in...')
        setloggedIn(true); 
    }

	return (
		<MainContentStyled>
			<div className="App">
				<UserContext.Provider value={value}>
					<TopNavBar />
				</UserContext.Provider>
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
							<ProjectsPage />
						</Route>
						{/* <Route path="/papers" exact>
							<ContactPage />
						</Route> */}
						<Route path="/signin" exact>
							<SignInPage onSignIn={onSignIn} />
						</Route>
						<Route path="/signup" exact>
							<SignUpPage />
						</Route>
						<Route path="/contact" exact>
							<ContactPage />
						</Route>
					</Switching>
			</div>
		</MainContentStyled>
	);
}
export default App;
