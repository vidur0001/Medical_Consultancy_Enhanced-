import React, { useEffect, useState } from 'react'
import DoctorsList from './DoctorsList'
import { Aboutus } from './Aboutus'
import { Blogs } from './Blogs'
// import {Consultancy} from './Consultancy'
import Consultancy from './Consultancy'
import { Home } from './Home'
import { Login } from './Login'
import { Register } from './Register'
import { Link} from 'react-router-dom'
import "./Navbars.css"

export const Navbars = () => {
  // const [signupHtml, setSignupHtml] = useState('');
  // const history = useHistory();
  // const handleLoginClick = async () => {
  //   try {
  //     const response = await fetch('/signup');
  //     const html = await response.text();
  //     setSignupHtml(html);
  //     history.push('/login'); // Navigate to the login page
  //   } catch (error) {
  //     console.error('Error fetching signup page:', error);
  //   }
  // };
// const [valid,setValid]=useState(" ");
// useEffect(()=>{
//   const hasToken=localStorage.getItem("token");
//   if(hasToken){
//     setValid("Valid");
//   }
//     else{
//       setValid("Invalid");
//     };
// },[]);
const token=localStorage.getItem("token");
// if(localStorage.getItem("token")=false){
//   setValid{}
// }

  return (
    <>
     <nav className="navbar">
      <Link className="btn" to="/">Home</Link>
      <Link className="btn" to="/AboutUs">About Us</Link>
      <Link className="btn" to="/Facilities">OurTeam</Link>
      <Link className="btn" to="/Consultancy">Consultancy</Link>
      {/* <Link className="btn" to="/Blogs">Blogs</Link> */}
      {token ? (
          <Link className="btn" to="/Logout">LogOut</Link>
            ) : (
      <>
          <Link className="btn"to="/Login">Login</Link>
          <Link className="btn" to="/Register">Register</Link>
      </>
      )}
      <Link to />
      {/* <Link className="btn" onClick={handleLoginClick}>Login</Link> */}
      {/* {signupHtml && (
        <div className="modal">
          <div className="modal-content">
            <div dangerouslySetInnerHTML={{ __html: signupHtml }} />
          </div>
        </div>
      )} */}

        {/* <button className='btn'><Link to={'/Login'}></Link> Home</button>
        <button className='btn'> About Us</button>
        <button className='btn'>Facilities</button>
        <button className='btn'>consultancy</button> 
        <button className='btn'>Blogs</button> */}
       </nav> 
    </>
  )
}
