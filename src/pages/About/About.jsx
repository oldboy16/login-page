import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AboutMain from '../../components/AboutMain'

function About() {
  return (
    <div>
        <Link to={'/About/aboutmain'}>about main</Link>
        <br />
        <Link to={'/About/aboutinfo'}>about info</Link>
       <Outlet/>
    </div>
  )
}

export default About