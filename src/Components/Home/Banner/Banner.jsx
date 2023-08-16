import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import { Fade, Slide } from "react-awesome-reveal";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from 'react-particles';
import { loadFull } from "tsparticles";
export default function Banner() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });

  return (
    <div className='bg-dark text-center ' style={{padding:"90px 0px"}} data-aos="zoom-in-down">
        
        <img src="https://i.ibb.co/0CFy0yZ/unnamed.jpg" className="rounded-circle mt-5 " style={{width: "150px" , height:'150px',objectFit:"cover" }}
  alt="Avatar" />

  <div>
  
    <h1 className='text-white mt-4 fw-bold display-5'  > <span  style={{
            backgroundImage: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>HELLO,IM FAHMID,</span>
          <span className='text-white' >
          
          <Typewriter
            words={['WEB DEVELOPER BASED IN BANGLADESH']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
        
          />
          
          
          
          
          
          </span> 
          
          
          
          
          
          
          
          </h1>
          <Fade delay={1e3} cascade damping={1e-1}>
          <p className='text-white mt-3'> I am a self-motivated, enthusiastic and passionate web developer</p>
      </Fade>

    <div className=' mt-4 d-flex flex-md-row flex-column justify-content-center align-items-center '>
 <Link to='https://drive.google.com/file/d/1kUcYL0yQGVQ_6ZPzOpN4SHaJqUKRiDZ5/view?usp=drive_link'>
 <button
  className='rounded-pill border-0 text-white px-4 py-2 me-md-3'
  style={{
    background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',

  }}
  // Add hover event handler
  onMouseEnter={(e) => e.target.style.background = ' linear-gradient(90deg, rgba(109,1,1,1) 0%, rgba(92,3,3,1) 100%)'}
  onMouseLeave={(e) => e.target.style.background = 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'}
>
  Download Resume
</button>
 </Link>
       <a href='#project'><button className="btn btn-outline-light px-4 py-2 rounded-pill mt-3 mt-md-0">VIEW ALL WORKS</button></a>
    </div>
  </div>
  <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
            
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
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
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 155,
                        enable: true,
                        opacity: 0.9,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                  
                },
                detectRetina: true,
            }}
        />
    </div> 
  )
}
