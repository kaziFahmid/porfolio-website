import React from 'react'
import Lottie from 'react-lottie';
import data from './lottie.json'


export default function AboutMe() {



  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };





  return (
    <div className='bg-dark pt-5 pb-5 ' id='about' >
      
     <div className='container'>

     <div className= 'row justify-content-center align-items-center' >
     <div   className='col-12 col-md-6' >
      <Lottie  options={defaultOptions}
              
             />
      </div>
      <div className='text-white col-12 col-md-6'>
        <h1 className='fw-bold' style={{
            backgroundImage: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }} >About Me</h1>
        <p>
        I am a self-motivated and passionate web developer with a strong interest in front-end development and the MERN stack. With a solid foundation in HTML, CSS, and JavaScript, I specialize in creating responsive and user-friendly web applications.</p>

        <h1 className='fw-bold' style={{
            backgroundImage: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }} >Educations</h1>
  <ul>
    <li>BA Pass Course (National University) - Present</li>
    <li>HSC (Nawab Habibullah Model School and College) - 2021</li>
    <li>SSC (Dhaka Megacity College) - 2019</li>
  </ul>


      </div>












     </div>



     </div>
    </div>
  )
}
