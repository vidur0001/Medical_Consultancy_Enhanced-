// // import React, { useState } from 'react';
// // import './Consultancy.css';
// // import AllDoctors from './DoctorsList';
// // import { Navbars } from './Navbars';

// //  const Consultancy = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     age: '',
// //     address: '',
// //     gender: '',
// //     medicalIssue: '',
// //     dateOfAppointment: '',
// //     timing: '',
// //     mobile: '',
// //     email: '',
// //   });
// //   const [error, setError] = useState('');
// //   const [appointment, setAppointment] = useState(false);
// //   const [doctor, setDoctor] = useState(null);
// //   const [token, setToken] = useState('');

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const doctors = AllDoctors.filter((doctor) =>
// //       doctor.issues.includes(formData.medicalIssue)
// //     );

// //     if (doctors.length > 0) {
// //       const doctor = doctors[0];
// //       const timing = formData.timing;
// //       const doctorTimings = doctor.timings.split(', ');
// //       let availableTiming = null;
// //       for (let i = 0; i < doctorTimings.length; i++) {
// //         const timingParts = doctorTimings[i].split(' - ');
// //         const start = timingParts[0];
// //         const end = timingParts[1];
// //         if (timing >= start && timing <= end) {
// //           availableTiming = timing;
// //           break;
// //         }
// //       }
// //       if (!availableTiming) {
// //         const middleTiming = doctorTimings[0].split(' - ')[0];
// //         availableTiming = middleTiming;
// //       }
// //       setDoctor(doctor);
// //       setAppointment(true);
// //       setError('');
// //       const token = Math.floor(1000 + Math.random() * 9000);
// //       setToken(token);
// //     } else {
// //       setError('No doctor available for this medical issue');
// //       setAppointment(false);
// //     }
// //   };

// //   return (
// //     <>
// //       <div className="navs">{<Navbars />}</div>
// //       <div className="thisbody">
// //         <div className="consultancy">
// //           <h2 className="pageheading">Consultancy Portal</h2>
// //           <form onSubmit={handleSubmit}>
// //             <div className="form-container">
// //               <h2>Enter Your Details</h2>
// //               <div className="form-group">
// //                 <label>Name:</label>
// //                 <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
// //               </div>
// //               <div className="form-group">
// //                 <label>Age:</label>
// //                 <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
// //               </div>
// //               <div className="form-group">
// //                 <label>Address:</label>
// //                 <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
// //               </div>
// //               <div className="form-group">
// //                 <label>Gender:</label>
// //                 <select name="gender" value={formData.gender} onChange={handleInputChange}>
// //                   <option value="">Select</option>
// //                   <option value="Male">Male</option>
// //                   <option value="Female">Female</option>
// //                 </select>
// //               </div>
// //               <div className="form-group">
// //                 <label>Medical Issue:</label>
// //                 <input type="text" name="medicalIssue" value={formData.medicalIssue} onChange={handleInputChange} />
// //               </div>
// //               <div className="form-group">
// //                 <label>Date of Appointment:</label>
// //                 <input type="date" name="dateOfAppointment" value={formData.dateOfAppointment} onChange={handleInputChange} />
// //               </div>
// //               <div className="form-group">
// //                 <label>Timing:</label>
// //                 <input type="time" name="timing" value={formData.timing} onChange={handleInputChange} />
// //               </div>
// //               <div className="form-group">
// //                 <label>Mobile:</label>
// //                 <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} />
// //               </div>
// //               <div className="form-group">
// //                 <label>Email:</label>
// //                 <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
// //               </div>
// //               <button type="submit">Book Appointment</button>
// //             </div>
// //           </form>
// //           {error && <p style={{ color: 'red' }}>{error}</p>}
// //           {appointment && (
// //             <p>
// //               Appointment confirmed with Dr. {doctor.name} on {formData.dateOfAppointment} at {formData.timing}! Your token number is {token}
// //             </p>
// //           )}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };
// // export default Consultancy

















// import React, { useState } from 'react';
// import './Consultancy.css';
// import AllDoctors from './DoctorsList';
// import { Navbars } from './Navbars';

// const Consultancy = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     address: '',
//     gender: '',
//     medicalIssue: '',
//     dateOfAppointment: '',
//     timing: '',
//     mobile: '',
//     email: '',
//   });
//   const [error, setError] = useState('');
//   const [appointment, setAppointment] = useState(false);
//   const [doctor, setDoctor] = useState(null);
//   const [token, setToken] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const doctors = AllDoctors.filter((doctor) =>
//       doctor.issues.includes(formData.medicalIssue)
//     );

//     if (doctors.length > 0) {
//       const doctor = doctors[0];
//       const timing = formData.timing;
//       const doctorTimings = doctor.timings.split(', ');
//       let availableTiming = null;
//       for (let i = 0; i < doctorTimings.length; i++) {
//         const timingParts = doctorTimings[i].split(' - ');
//         const start = timingParts[0];
//         const end = timingParts[1];
//         if (timing >= start && timing <= end) {
//           availableTiming = timing;
//           break;
//         }
//       }
//       if (!availableTiming) {
//         const middleTiming = doctorTimings[0].split(' - ')[0];
//         availableTiming = middleTiming;
//       }
//       setDoctor(doctor);
//       setAppointment(true);
//       setError('');
//       const token = Math.floor(1000 + Math.random() * 9000);
//       setToken(token);
//     } else {
//       setError('No doctor available for this medical issue');
//       setAppointment(false);
//     }
//   };

//   const getUniqueIssues = () => {
//     const issues = AllDoctors.reduce((acc, doctor) => {
//       return acc.concat(doctor.issues);
//     }, []);
//     return [...new Set(issues)];
//   };

//   return (
//     <>
//       <div className="navs"><Navbars /></div>
//       <div className="thisbody">
//         <div className="consultancy">
//           <h2 className="pageheading">Consultancy Portal</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-container">
//               <h2>Enter Your Details</h2>
//               <div className="form-group">
//                 <label>Name:</label>
//                 <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
//               </div>
//               <div className="form-group">
//                 <label>Age:</label>
//                 <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
//               </div>
//               <div className="form-group">
//                 <label>Address:</label>
//                 <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
//               </div>
//               <div className="form-group">
//                 <label>Gender:</label>
//                 <select name="gender" value={formData.gender} onChange={handleInputChange}>
//                   <option value="">Select</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Medical Issue:</label>
//                 <select name="medicalIssue" value={formData.medicalIssue} onChange={handleInputChange}>
//                   <option value="">Select an issue</option>
//                   {getUniqueIssues().map(issue => (
//                     <option key={issue} value={issue}>{issue}</option>
//                   ))}
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Date of Appointment:</label>
//                 <input type="date" name="dateOfAppointment" value={formData.dateOfAppointment} onChange={handleInputChange} />
//               </div>
//               <div className="form-group">
//                 <label>Timing:</label>
//                 <input type="time" name="timing" value={formData.timing} onChange={handleInputChange} />
//               </div>
//               <div className="form-group">
//                 <label>Mobile:</label>
//                 <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} />
//               </div>
//               <div className="form-group">
//                 <label>Email:</label>
//                 <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
//               </div>
//               <button type="submit">Book Appointment</button>
//             </div>
//           </form>
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           {appointment && (
//             <p>
//               Appointment confirmed with Dr. {doctor.name} on {formData.dateOfAppointment} at {formData.timing}! Your token number is {token}
//             </p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Consultancy;


import React, { useState } from 'react';
import './Consultancy.css';
import { getIssuesList, AllDoctors } from './DoctorsList'; // Adjust import path as needed
import { Navbars } from './Navbars';
import { TimePicker } from 'antd';

const Consultancy = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    gender: '',
    medicalIssue: '',
    dateOfAppointment: '',
    timing: '',
    mobile: '',
    email: '',
    fee: ''
  });
  const [error, setError] = useState('');
  const [appointment, setAppointment] = useState(false);
  const [doctor, setDoctor] = useState(null);
  const [token, setToken] = useState('');
  const [fee,setFee]=useState('');
  // const [selectedDoctorsList, selectedDoctorsList]=useState([]);



  // if(availableTiming){
      //   for(int i=0;i<doctor.length;i++){
      //     if(i.timings=availableTiming){
      //       chooseDoctors[i]==doctor.name;
      //     }
      //   }
      // }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const currentDate=new Date();
  const foermDate=new Date(formData.dateOfAppointment);
   const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure AllDoctors is an array
    if (!Array.isArray(AllDoctors)) {
      setError('Doctors data is not loaded correctly.');
      return;
    }

    // Find the first doctor that matches the medical issue
    const doctor = AllDoctors.find((doctor) =>
      doctor.issues.includes(formData.medicalIssue)
    );

    if (doctor) {
      const timing = formData.timing;
      const doctorTimings = doctor.timings.split(', ');
      let availableTiming = null;
      // const chooseDoctors[]=null;
      for (let i = 0; i < doctorTimings.length; i++) {
        const timingParts = doctorTimings[i].split(' - ');
        const start = timingParts[0];
        const end = timingParts[1];
        if (timing >= start && timing <= end) {
          availableTiming = timing;
          break;
        }
      }
      
      if (!availableTiming) {
        availableTiming = doctorTimings[0].split(' - ')[0];
      }

      setDoctor(doctor);
      setAppointment(true);
      setError('');
      const newToken = Math.floor(1000 + Math.random() * 9000);
      setToken(newToken);
    } else {
      setError('No doctor available for this medical issue');
      setAppointment(false);
    }
  };

  // Retrieve unique issues from AllDoctors
  const getUniqueIssues = () => {
    return getIssuesList(); // Use the function from DoctorsList.js
  };

// const doctors[]=AllDoctors.findAll(doctors.timing==``)
  return (
    <>
      <div className="navs"><Navbars /></div>
      <div className="thisbody">
        <div className="consultancy">
          <h2 className="pageheading">Consultancy Portal</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <h2>Enter Your Details</h2>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Gender:</label>
                <select name="gender" value={formData.gender} onChange={handleInputChange}>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <label>Medical Issue:</label>
                <select name="medicalIssue" value={formData.medicalIssue} onChange={handleInputChange}>
                  <option value="">Select an issue</option>
                  {getUniqueIssues().map(issue => (
                    <option key={issue} value={issue}>{issue}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Date of Appointment:</label>
                <input type="date" name="dateOfAppointment" value={formData.dateOfAppointment} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Timing:</label>
                <input type="time" name="timing" value={formData.timing} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                {/* <input type="text" name="Select a Doctor" value={} /> */}
              </div>
              <div className="form-group">
                <label>Mobile:</label>
                {/* <TimePicker.RangePicker format={"HH:mm"}/> */}
                <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Doctor fee</label>
                <input type="number" name="fee" value={formData.fee} onChange={handleInputChange}/>
              </div>
              <button type="submit">Book Appointment</button>
            </div>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {appointment && (
            <p>
              Appointment confirmed with Dr. {doctor.name} on {formData.dateOfAppointment} at {formData.timing}! <h3>Your token number is {token}</h3>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Consultancy;
