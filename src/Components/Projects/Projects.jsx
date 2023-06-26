import React, { useEffect } from 'react';
import projects from './Projects.json';
import { AiOutlineGithub } from 'react-icons/ai';
import { MdWeb } from 'react-icons/md';
import { FaServer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="bg-dark pt-5" id="project">
      <div className="container mt-5">
        <h1
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          className="fw-bold display-3"
          data-aos="fade-down"
        >
          My Projects
        </h1>
        <div className="row mt-5">
          {projects.map((project, index) => (
            <div className="col-md-4 mt-3" key={index}>
              <motion.div
            data-aos="fade-down"
                variants={container}
                initial="hidden"
                animate="visible"
                className="card text-white container"
                style={{ backgroundColor: '#1C1C22' }}
              >
                <img
                  src={project.projectPicture}
                  className="card-img-top"
                  style={{ height: '230px', objectFit: 'cover' }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.projectName}</h5>
                  <p>{project.features}</p>
                  <div className="mt-4">
                    <motion.button
                      className="btn btn-light rounded-circle item"
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Link to={project.projectLink} className="text-black">
                        <MdWeb />
                      </Link>
                    </motion.button>
                    <motion.button
                      className="btn btn-light rounded-circle ms-3 item"
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Link to={project.clientCode} className="text-black">
                        <AiOutlineGithub />
                      </Link>
                    </motion.button>
                    <motion.button
                      className="btn btn-light rounded-circle ms-3"
                      variants={item}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Link to={project.serverCode} className="text-black">
                        <FaServer />
                      </Link>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
