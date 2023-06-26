import React from 'react'
import { GrMail } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Contactus() {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });

  return (
   <div className='bg-dark pt-5  mt-5' id='contactme'>



<div className='container mt-5'>
<div className='row'>

    <div className='col-12 col-md-6'>

<h1 style={{
            backgroundImage: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }} className='display-4 fw-bold mt-5'>Get in Touch</h1>

          <ul className='mt-4'>
            <li className='text-white list-group-item d-flex justify-content-start align-items-center gap-3'> < GrMail />nirjhorislam42@gmail.com</li>
            <li className='text-white list-group-item mt-2  d-flex  justify-content-start align-items-center gap-3 '><BsFillTelephoneFill/>01787939177</li>
          </ul>
    </div>
    <div className='col-12 col-md-6' data-aos="fade-down-left">
        
       <form className='mt-5'>
    <div>
    <label for="inputUsername" className="form-label text-white">Username</label>
<input type="text" id="inputUsername" className="form-control bg-dark" aria-describedby="userName"  />
    </div>

    <div className='mt-5'>
    <label for="inputEmail" className="form-label text-white">Email</label>
<input type="email" id="inputEmail" className="form-control bg-dark" aria-describedby="userName"/>
    </div>

    <div className="form-floating mt-5">
  <textarea className="form-control bg-dark" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "150px"}}></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
<div>
    <button className=' rounded-pill mt-3  border-0  text-white px-5 py-2 me-3'   style={{
    background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
    transition: 'background-color 0.3s', 
  }}

  onMouseEnter={(e) => e.target.style.background = ' linear-gradient(90deg, rgba(109,1,1,1) 0%, rgba(92,3,3,1) 100%)'}
  onMouseLeave={(e) => e.target.style.background = 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'}>Submit</button>
</div>
       </form>



        </div>

</div>
    
      
    </div>











   </div>
  )
}
