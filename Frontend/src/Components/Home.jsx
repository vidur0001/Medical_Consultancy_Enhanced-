import React from 'react';
import { useEffect } from 'react';
import { Navbars } from './Navbars';
import DoctorsList from './DoctorsList';
import './Home.css'
import axios from 'axios';
import UserInfo from './UserInfo';
export const Home = () => {
  // login user data
  const getUserData = async()=>{
    try{
      const res=await axios.post('http://localhost:4000/getUserData',{},{
        headers:{
          Authorization:'Bearer ' + localStorage.getItem("token"),
        },
      })
    }catch(error){
      console.log(error);
    }
  };
  useEffect(()=>{
    getUserData();
  },[]);
  return (
    <>
      <div className="firstpart">
        <div className="name">ASHIRVAD HOSPITAL</div>
        <div className="navs">{<Navbars />}</div>
      </div>

      <div className="secondpart">
        <div className="homepage">
          <div className="heading">Your Trusted Healthcare Partner</div>
          {/* <div className="item item1"><img src={firstimage} alt="Senior Doctor" /></div> */}
          {/* <div className="item">SecondClass</div>
        <div className="item">ThirdClass</div>
        <div className="item">Firstclass</div>S9E3X3YU6G
        <div className="item">SecondClass</div>
        <div className="item">ThirdClass</div> 
         <div className="item">Firstclass</div>
        <div className="item">SecondClass</div> 
        <div className="item">ThirdClass</div>
        <div className="item">Firstclass</div>
        <div className="item">SecondClass</div>
        <div className="item">ThirdClass</div>   */}
        </div>
      </div>
      <div className="doctorslist">
        <DoctorsList />
      </div>
    </>
  );
}
