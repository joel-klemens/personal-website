//@ts-check
import React from "react";
import Particles from "react-tsparticles";


const ParticlesBG = () => {

    const particlesInit = (main) => {
        //console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
       // console.log(container);
    };

    return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            background: {
                color: {
                    value: "#958f7bff",
                },
            },
            fullScreen: {
                enable: true,
                zIndex: -1,
            },
            fpsLimit: 30,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    onHover: {
                        enable: false,
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                        distance: 100,
                        duration: 0.4,
                        opacity: 0.8,
                        size: 40,
                    },
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.2,
                    },
                },
            },
            particles: {
                color: {
                    value: "#232720ff",
                },
                links: {
                    color: "#232720ff",
                    distance: 185,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    bounce: {
                        horizontal: {
                            random: {
                                enable: false,
                                minimumValue: 0.1,
                            },
                            value: 0.25,
                        },
                        vertical: {
                            random: {
                                enable: false,
                                minimumValue: 0.1,
                            },
                            value: 0.25,
                        },
                    },
                    enable: true,
                    mode: "bounce",
                    overlap: {
                        enable: true,
                        retries: 0,
                    },
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 0.4,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                    value: 50,
                },
                opacity: {
                    value: 0.8,
                    random: {
                        enable: true,
                        minimumValue: 0.3
                    }
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: {
                        enable: true,
                        minimumValue: 3
                    },
                    value: 10,
                },
            },
        }}
    />
    );
}
export default ParticlesBG; 