//@ts-check
import React from "react";
import Particles from "react-tsparticles";

const ParticlesBGFloat = () => {
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
                autoPlay: true,
                background: {
                    image: "linear-gradient(rgb(189, 101, 233) 0%, rgb(34, 114, 252)100%)",
                    position: "",
                    repeat: "",
                    size: "",
                    opacity: 1,
                },
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                duration: 0,
                fpsLimit: 60,
                particles: {
                    number: { value: 80 },
                    size: {
                        value: 3,
                        random: true,
                        anim: { speed: 4, size_min: 0.3 },
                    },
                    links: { enable: false },
                    move: {
                        enable: true,
                        random: true,
                        speed: 1,
                        direction: "top",
                        out_mode: "out",
                    },
                },
                interactivity: {
                    events: {
                        onhover: { enable: true, mode: "bubble" },
                        onclick: { enable: true, mode: "repulse" },
                    },
                    modes: {
                        bubble: {
                            distance: 250,
                            duration: 2,
                            size: 0,
                            opacity: 0,
                        },
                        repulse: { distance: 400, duration: 4 },
                    },
                },
            }}
        />
    );
};
export default ParticlesBGFloat;
