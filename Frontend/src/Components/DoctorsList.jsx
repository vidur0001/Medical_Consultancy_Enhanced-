// import React from 'react'
// // import Anuragsir from './assets/doctors/Anuragsir.png'
// import Anuragsir from '../assets/doctors/Anuragsir.png'
// import Anandsir from '../assets/doctors/AnandSir.png'
// import Atulsir from '../assets/doctors/Atulsir.png'
// import Himanshusir from '../assets/doctors/Himanshujain.png'
// import Ruchimam from '../assets/doctors/Ruchimam.png'
// import Bowas from '../assets/doctors/BowasHarwon.png'
// import Lairesir from '../assets/doctors/LaireJamson.png'
// import './DoctorsList.css'
// const AllDoctors = [
//   {
//     name: "Dr. Anurag Kaushal",
//     age: 40,
//     experience: 25,
//     specialist: "Cardiologist",
//     issues: ["Heart Attack", "Arrhythmia", "Hypertension", "Heart Failure", "Coronary Artery Disease"],
//     timings: "MON - SUN, 24 * 7",
//     image: Anuragsir,
//   },
//   {
//     name: "Dr. Himanshu Jain",
//     age: 44,
//     experience: 23,
//     specialist: "Neurosurgeon",
//     issues: ["Brain Tumor", "Spinal Cord Injury", "Epilepsy", "Stroke", "Parkinson's Disease"],
//     timings: "MON - SUN, 24 * 7",
//     image: Himanshusir,
//   },
//   {
//     name: "Dr. Ruchi Jain",
//     age: 40,
//     experience: 20,
//     specialist: "Cardiologist",
//     issues: ["Heart Attack", "Arrhythmia", "Hypertension", "Heart Failure", "Coronary Artery Disease"],
//     timings: "MON - SUN, 24 * 7",
//     image: Ruchimam,
//   },
//   {
//     name: "Dr. Himanshu Anand",
//     age: 35,
//     experience: 10,
//     specialist: "Orthopaedic Surgeon",
//     issues: ["Back Pain", "Fractures", "Arthritis", "Bone Tumors", "Osteoporosis"],
//     timings: "9:00 AM - 1:00 PM, 4:00 PM - 7:00 PM",
//     image: Anandsir,
//   },
//   {
//     name: "Dr. Atul Arora",
//     age: 40,
//     experience: 16,
//     specialist: "General Surgeon",
//     issues: ["Appendicitis", "Gallstones", "Hernia", "Breast Tumors", "Colon Cancer"],
//     timings: "10:00 AM - 2:00 PM, 5:00 PM - 8:00 PM",
//     image: Atulsir,
//   },
//   {
//     name: "Dr. Bowas Harwon",
//     age: 41,
//     experience: 10,
//     specialist: "Dermatologist",
//     issues: ["Acne", "Eczema", "Psoriasis", "Skin Cancer", "Hair Loss"],
//     timings: "9:00 AM - 1:00 PM, 4:00 PM - 7:00 PM",
//     image: Bowas,
//   },
//   {
//     name: "Dr. Laire Jamson",
//     age: 38,
//     experience: 8,
//     specialist: "General Physician",
//     issues: ["Fever", "Cold & Flu", "Diabetes", "Hypertension", "Allergies"],
//     timings: "9:00 AM - 1:00 PM, 4:00 PM - 7:00 PM",
//     image: Lairesir,
//   }
// ];
// function DoctorsList() {
//     // {console.log("Hello World")}
// return(
    
//     <div className="doctor-list">
//         {AllDoctors.map((doctor)=>(
//             <div key={doctor.name} className="doctor-item">
//                 <h2>{doctor.name}</h2>
//                 <img src={doctor.image} alt={doctor.name} />
//                 <p>Age: {doctor.age}</p>
//                 <p>Experience: {doctor.experience}</p>
//                 <p>Specialist: {doctor.specialist}</p>
//                 <p>Timings: {doctor.timings}</p>
//             </div>
//         ))}
//     </div>
// );
// }
// export default DoctorsList;



import React from 'react';
import Anuragsir from '../assets/doctors/Anuragsir.png';
import Anandsir from '../assets/doctors/AnandSir.png';
import Atulsir from '../assets/doctors/Atulsir.png';
import Himanshusir from '../assets/doctors/Himanshujain.png';
import Ruchimam from '../assets/doctors/Ruchimam.png';
import Bowas from '../assets/doctors/BowasHarwon.png';
import Lairesir from '../assets/doctors/LaireJamson.png';
import './DoctorsList.css';
import { Link } from 'react-router-dom';
import StarRating from './starRating';

// Define the array of doctors
// const  starRating = ({rating})=>{
//   <div>
//   {[...Array(rating)].map((_, i) => (
//     <span key={i} className="fa fa-star checked"></span>
//   ))}
//   {[...Array(5-rating)].map((_,i)=>{
//     <span key={i} className="fa fa star"></span>
//   })}
//   </div>
// }
const AllDoctors = [
  {
    name: "Dr. Anurag Kaushal",
    age: 40,
    experience: 25,
    specialist: "Cardiologist",
    issues: ["Heart Attack", "Arrhythmia", "Hypertension", "Heart Failure", "Coronary Artery Disease"],
    timings: "MON - SUN, 24 * 7",
    image: Anuragsir,
    fee: 300,
    rating:5
  },
  {
    name: "Dr. Himanshu Jain",
    age: 44,
    experience: 23,
    specialist: "Neurosurgeon",
    issues: ["Brain Tumor", "Spinal Cord Injury", "Epilepsy", "Stroke", "Parkinson's Disease"],
    timings: "MON - SUN, 24 * 7",
    image: Himanshusir,
    Fee: 300,
    rating: 4
  },
  {
    name: "Dr. Ruchi Jain",
    age: 40,
    experience: 20,
    specialist: "Cardiologist",
    issues: ["Heart Attack", "Arrhythmia", "Hypertension", "Heart Failure", "Coronary Artery Disease"],
    timings: "MON - SUN, 24 * 7",
    image: Ruchimam,
    Fee: 250,
    rating:4
  },
  {
    name: "Dr. Himanshu Anand",
    age: 35,
    experience: 10,
    specialist: "Orthopaedic Surgeon",
    issues: ["Back Pain", "Fractures", "Arthritis", "Bone Tumors", "Osteoporosis"],
    timings: "9:00 AM - 1:00 PM, 4:00 PM - 7:00 PM",
    image: Anandsir,
    Fee: 300,
    rating: 4
  },
  {
    name: "Dr. Atul Arora",
    age: 40,
    experience: 16,
    specialist: "General Surgeon",
    issues: ["Appendicitis", "Gallstones", "Hernia", "Breast Tumors", "Colon Cancer"],
    timings: "10:00 AM - 2:00 PM, 5:00 PM - 8:00 PM",
    image: Atulsir,
    Fee:200,
    rating: 4
  },
  {
    name: "Dr. Bowas Harwon",
    age: 41,
    experience: 10,
    specialist: "Dermatologist",
    issues: ["Acne", "Eczema", "Psoriasis", "Skin Cancer", "Hair Loss"],
    timings: "9:00 AM - 1:00 PM, 4:00 PM - 7:00 PM",
    image: Bowas,
    Fee: 500,
    rating:4
  },
  {
    name: "Dr. Laire Jamson",
    age: 38,
    experience: 8,
    specialist: "General Physician",
    issues: ["Fever", "Cold & Flu", "Diabetes", "Hypertension", "Allergies"],
    timings: "9:00 AM - 1:00 PM, 4:00 PM - 7:00 PM",
    image: Lairesir,
    Fee:450,
    rating:4
  }
];

const DoctorsList = () => {
  return (
    <div className="doctor-list">
      {AllDoctors.map((doctor) => (
        <div key={doctor.name} className="doctor-item">
          <h2>{doctor.name}</h2>
          <img src={doctor.image} alt={doctor.name} />
          <h2><StarRating rating={doctor.rating} /></h2>
          <p>Age: {doctor.age}</p>
          <p>Experience: {doctor.experience} years</p>
          <p>Specialist: {doctor.specialist}</p>
          <p>Timings: {doctor.timings}</p>
          <p>Fee</p>
        </div>
      ))}
    </div>
  );
};

// Extract and export the unique list of issues
export const getIssuesList = () => {
  const issues = AllDoctors.flatMap((doctor) => doctor.issues);
  return [...new Set(issues)]; // Remove duplicates
};

export { AllDoctors };
export default DoctorsList;












