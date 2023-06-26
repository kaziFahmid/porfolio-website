import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Skills() {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <div style={{backgroundColor:'#1C1C22' ,paddingTop:'120px',paddingBottom:'120px'}} >
     
        <div  >
            <h1 className='text-white display-2 fw-bold ms-5 ' style={{
            backgroundImage: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
           
          }}  > My Skills</h1>
        </div>
       
     <ul className='container mt-5' data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
        <li  className=' skillList  p-4 list-group-item  text-white display-5 mt-4  border-bottom fw-bold d-flex justify-content-between align-items-center' >HTML <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/></li>
        <li  className='skillList  p-4 list-group-item  text-white display-5   border-bottom fw-bold d-flex justify-content-between align-items-center' >CSS <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/></li>
        <li  className=' skillList list-group-item  text-white display-5  p-4  border-bottom fw-bold d-flex justify-content-between align-items-center' >JavaScript <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/></li>
        <li  className=' skillList list-group-item  text-white display-5  p-4  border-bottom fw-bold d-flex justify-content-between align-items-center'  >React.JS <img width="48"  height="48" src="https://img.icons8.com/plasticine/100/react.png" alt="react"/></li>
        <li  className=' skillList list-group-item  text-white display-5  p-4  border-bottom fw-bold d-flex justify-content-between align-items-center'  >Bootstrap <img width="48" height="48" src="https://img.icons8.com/color/48/bootstrap.png" alt="bootstrap"/></li>
        <li  className='list-group-item skillList  text-white display-5  p-4  border-bottom fw-bold d-flex justify-content-between align-items-center'  >TailwindCSS <img width="48" height="48" src="https://img.icons8.com/color/48/tailwindcss.png" alt="tailwindcss"/></li>


        <li  className='list-group-item skillList  text-white display-5  p-4  border-bottom fw-bold d-flex justify-content-between align-items-center'  >Node JS <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/></li>


        <li  className='list-group-item skillList  text-white display-5  p-4  border-bottom fw-bold d-flex justify-content-between align-items-center'  >Express JS <img width="48" height="48" src="https://img.icons8.com/fluency/48/express-js.png" alt="express-js"/></li>


        <li  className='list-group-item skillList  text-white display-5  p-4  border-bottom fw-bold d-flex justify-content-between align-items-center'  >Mongo DB <img width="48" height="48" src="https://img.icons8.com/color/48/mongodb.png" alt="mongodb"/></li>







     </ul>


     <div  >
            <h1 className='text-white display-2 fw-bold ms-5 mt-5 ' style={{
            backgroundImage: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
           
          }}   > Tools</h1>
        </div>
       

     <ul className='container mt-5' data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
        <li  className=' skillList  p-4 list-group-item  text-white display-5 mt-4  border-bottom fw-bold d-flex justify-content-between align-items-center' >Vs Code<img width="48" height="48" src="https://img.icons8.com/color/48/visual-studio-code-2019.png" alt="visual-studio-code-2019"/></li>
       

        <li  className=' skillList  p-4 list-group-item  text-white display-5  border-bottom fw-bold d-flex justify-content-between align-items-center' >Git<img width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git"/></li>
       
       
        <li  className=' skillList  p-4 list-group-item  text-white display-5   border-bottom fw-bold d-flex justify-content-between align-items-center' >Firebase<img width="48" height="48" src="https://img.icons8.com/color/48/firebase.png" alt="firebase"/></li>
       
        <li  className=' skillList  p-4 list-group-item  text-white display-5   border-bottom fw-bold d-flex justify-content-between align-items-center' >Netlify<img width="30" height="30" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" alt="external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo"/></li>




     </ul>
















    </div>
  )
}
