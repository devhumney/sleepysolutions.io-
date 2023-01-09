import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

import React from 'react';

function ParticleNew() {

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };


  
  function Particle2() {
    return (
    <Particles 
        id="tsparticles"
            init={particlesInit}
            Loaded={particlesLoaded}

            options={
                {
                    "particles": {
                        "number": {
                          "value": 33,
                          "density": {
                            "enable": true,
                            "value_area": 800
                          }
                        },
                        "color": {
                          "value": "#00ff0f"
                        },
                        "shape": {
                          "type": "circle",
                          "stroke": {
                            "width": 15,
                            "color": "#ffffff"
                          },
                          "polygon": {
                            "nb_sides": 3
                          },
                          "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                          }
                        },
                        "opacity": {
                          "value": 0.5,
                          "random": true,
                          "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": true
                          }
                        },
                        "size": {
                          "value": 3,
                          "random": true,
                          "anim": {
                            "enable": true,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                          }
                        },
                        "line_linked": {
                          "enable": true,
                          "distance": 299.88083682536654,
                          "color": "#ffffff",
                          "opacity": 0.4,
                          "width": 1
                        },
                        "move": {
                          "enable": true,
                          "speed": 6,
                          "direction": "none",
                          "random": true,
                          "straight": false,
                          "out_mode": "out",
                          "bounce": false,
                          "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                          }
                        }
                      },
                      "interactivity": {
                        "detect_on": "window",
                        "events": {
                          "onhover": {
                            "enable": true,
                            "mode": "repulse"
                          },
                          "onclick": {
                            "enable": true,
                            "mode": "bubble"
                          },
                          "resize": true
                        },
                        "modes": {
                          "grab": {
                            "distance": 400,
                            "line_linked": {
                              "opacity": 1
                            }
                          },
                          "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                          },
                          "repulse": {
                            "distance": 200,
                            "duration": 0.4
                          },
                          "push": {
                            "particles_nb": 4
                          },
                          "remove": {
                            "particles_nb": 2
                          }
                        }
                      },
                      "retina_detect": false
                    
                  }
                } />
            
    )
            
            }
}
  
  export default ParticleNew