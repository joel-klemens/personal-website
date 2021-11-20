import React from "react"
import SignIn from "./SignIn";
import ParticlesBG from "../Particles-bg";

const SignInPage = ({ onSignIn }) => {
    return (
        <>
            <ParticlesBG />
            <SignIn onSignIn={onSignIn} />
        </>
    )
}
export default SignInPage;