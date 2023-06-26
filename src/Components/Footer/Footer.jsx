import React from 'react'
import { BiLogoLinkedin } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div style={{marginTop:"140px"}} className='container pb-5 border-top pt-5 d-flex flex-column flex-md-row justify-content-between align-items-center'>

      <div className='text-white '>
      <h3>Fahmid</h3>
      fahmid@2023, All rights reserved.
      </div>
            <div  className='text-white mt-5'>
        <ul className='d-flex justify-content-center align-items-center gap-3'>
          <li  className='list-group-item'> <a className=" text-white " href="#">Home</a></li>
          <li className='list-group-item'> <a className=" text-white " href="#about">About Me</a></li>
          <li className='list-group-item'><a className=" text-white " href="#contact">Contact Me</a></li>
        </ul>



        <ul className='d-flex justify-content-center align-items-center gap-3'>
         <Link to='https://www.linkedin.com/in/kazi-fahmid-islam-655b10228/ ' className='text-white'> <li  className='list-group-item display-6'> <BiLogoLinkedin /></li></Link>
        <Link to='https://github.com/kaziFahmid?tab=repositories' className='text-white'> <li className='list-group-item display-6'> <AiFillGithub/></li></Link> 

        </ul>





      </div>
      
    </div>
  )
}
