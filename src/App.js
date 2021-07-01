import React, { useState, useEffect } from 'react';
import SideNavBar from './Components/SideNavBar.js';
import GlobalStyles from './Styles/GlobalStyles.js';
import styled from 'styled-components';
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
//import Switch from '@material-ui/core/Switch';
import { Route, Switch as Switching } from "react-router";

//main content styles
const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  background-color: --background-dark-color;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }
  .testText{
    right: 50%;
    height: 50%;
  }
`;

//arrow guy stuff
// function ArrowGuy() {
//   const [mousePosition, setMousePosition] = useState({
//       x: null,
//       y: null
//   });

//   useEffect(() => {
//       function handle(e){
//           setMousePosition({
//               x: e.pageX,
//               y: e.pageY
//           });
//       }
//       document.addEventListener("mousemove", handle );
//       return () => document.removeEventListener("mousemove", handle );
//   })
//   return mousePosition;
// }

//App function - 
function App() {
  //needed for arrow guy
  //const {x,y} = ArrowGuy();
  return (
    <div className="App">
      <SideNavBar />
      <MainContentStyled>
        <Switching>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
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
