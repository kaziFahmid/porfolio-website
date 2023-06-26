import React from 'react'
import Banner from './Banner/Banner'
import Skills from './Skills/Skills'
import Projects from '../Projects/Projects'
import Contactus from '../Contactus/Contactus'
import AboutMe from '../AboutMe/AboutMe'


export default function Home() {
  return (
    <div>
      <Banner/>
  <AboutMe/>
      <Skills/>
      <Projects/>

      <Contactus/>
    </div>
  )
}
