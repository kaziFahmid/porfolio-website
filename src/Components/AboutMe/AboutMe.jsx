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

My name is Kazi Fahmid Islam, and I am a self-motivated and passionate web developer. My primary focus is on front-end development and utilizing the MERN stack. I have built a strong foundation in HTML, CSS, and JavaScript, which allows me to create responsive and user-friendly web applications.

Currently, I am pursuing a B.A. in Pass Course at National University, enhancing my academic background while continuing to expand my skills and knowledge in the field of web development.

I am dedicated to crafting engaging and visually appealing user interfaces, and I am enthusiastic about staying up-to-date with the latest industry trends and technologies. My goal is to contribute to creating seamless and impactful web experiences that leave a positive impression on users.</p>

       


      </div>












     </div>



     </div>
    </div>
  )
}
