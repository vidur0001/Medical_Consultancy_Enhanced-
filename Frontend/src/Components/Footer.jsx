import React from 'react'
import './Footer.css'
// import DoctorsList from './DoctorsList'
// import { Aboutus } from './Aboutus'
// import { Blogs } from './Blogs'
// import Consultancy from './Consultancy'
// import { Home } from './Home'
// import { Login } from './Login'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <div className="footer">
        <div className="ls">
    <ol><Link  className='links' to={'/'}>Home</Link></ol>
    <ol><Link  className='links' to={'/AboutUS'}>AboutUs</Link></ol>
    <ol><Link  className='links' to={'/Consultancy'}>Consultancy</Link></ol>
    <ol><Link  className='links' to={'/Blogs'}>Blogs</Link></ol>
    <ol ><Link  className='links' to={'/Login'}>Login</Link></ol>
    </div>
  </div>
  )
}
