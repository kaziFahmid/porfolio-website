import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {

  return (
    <nav className="navbar navbar-expand-lg bg-dark sticky-top shadow-sm  " >
    <div className="container ">
      <a className="navbar-brand text-white" href="#">Fahmid</a>

      <button className="navbar-toggler bg-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon  "></span>
      </button>

      <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white ">
          <li className="nav-item ms-4  ">
            <Link className="nav-link text-white   " aria-current="page" to="/">Home</Link>
          </li>
       
          <li className="nav-item ms-4">
            <a className="nav-link text-white" href="#project">Projects</a>
          </li>
          <li className="nav-item ms-4">
            <a className="nav-link text-white" href="#about">About</a>
          </li>

          <li className="nav-item ms-4">
            <a className="nav-link text-white" href="#contactme">Contact Me</a>
          </li>
       
       
        </ul>

    
       
      </div>

    </div>
  </nav>
  )
}
