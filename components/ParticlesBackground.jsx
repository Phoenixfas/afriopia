import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticlesBackground({ color, amount }) {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            grab: {
              distance: 200, 
              links:{
                blink: false,
                consent: false,
                opacity: 1
              }
            },
            connect: {
              distance: 80,
              link: {
                opacity: 0.5
              },
              radius: 60
            },
            attract: {
              distance: 500,
              duration: 1,
              easing: "ease-out-quad",
              factor: 5,
              maxSpeed: 50,
              speed: 1
            }
          },
        },
        particles: {
          color: {
            value: color ? color : "#fff",
          },
          links: {
            color: color ? color : "#fff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: amount ? amount : 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        style: {
          width: "100%",
          height: "100%",
          position: "absolute",
        },
        detectRetina: true,
      }}
    />
  );
}
