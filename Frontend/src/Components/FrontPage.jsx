import React from 'react';
import './FrontPage.css'; // Ensure to import your CSS file
import HospitalImage from '../assets/Front_Images/Hospital.png';
import NeurologyImage from '../assets/Front_Images/Neurology.png';
import OrthopedicsImage from '../assets/Front_Images/Orthopedics.png';
import PediatricsImage from '../assets/Front_Images/Pediatrics.png';
import CardiologyImage from '../assets/Front_Images/Cardiology.png';
import DermatologyImage from '../assets/Front_Images/Dermatology.png';
import GynecologyImage from '../assets/Front_Images/Gynecology.png';
import OncologyImage from '../assets/Front_Images/Oncology.png';
import GastroenterologyImage from '../assets/Front_Images/Gastroenterology.png';
import EndocrionolgyImage from '../assets/Front_Images/Endocrionolgy.png';
import OphthalmologyImage from '../assets/Front_Images/Ophthalmology.png';
import {Navbars} from './Navbars';
import UserInfo from './UserInfo';
import { Link } from 'react-router-dom';
import HospitalLogo from "../assets/doctors/Hospital_Logo.jpg"

const FrontPage = () => {
    return (
        <div>
            
            <header>
            <img src={HospitalLogo} alt="Hospital-Logo" />
                <h1>Aashirvad Hospital</h1>
                {/* <div className="admin"></div> */}
                {<UserInfo/>}
                {/* <p>Your Health, Our Priority</p> */}
            </header>
            <Navbars/>

            <div className="hero">
                <img src={HospitalImage} alt="Hospital" />
                <p>
                    
Aashirvad Hospital is committed to providing highclass healthcare services with a team of experienced professionals
 dedicated to your well-being. Our highly skilled doctors and specialists bring years of expertise 
 and a compassionate approach to patient care. Equipped with advanced medical facilities, 
 we uphold the highest standards in treatment and diagnostics. 
 Our collaborative multidisciplinary staff ensures comprehensive care tailored to each patient's needs. 
 From cutting-edge technology to comfortable recovery environments, every aspect of Aashirvad Hospital is designed
  to support healing and wellness. We strive to be your trusted partner in health, delivering excellence and compassionate
   care at every step of your healthcare journey.
                </p>
            </div>

            <div className="description-card">
                <div className="description-content">
                    <h2>Welcome to Aashirvad Hospital</h2>
                    {/* <p>
                        Aashirvad Hospital is committed to providing the highest quality healthcare services
                        with compassion and respect. Our team of skilled professionals is here to ensure
                        your health and well-being.
                    </p> */}
                </div>
            </div>

            <div className="treatments">
                <h2>Our Treatments</h2>
                <div className="card-container">
                    {[
                        { name: 'Neurology', img: NeurologyImage },
                        { name: 'Orthopedics', img: OrthopedicsImage },
                        { name: 'Pediatrics', img: PediatricsImage },
                        { name: 'Cardiology', img: CardiologyImage },
                        { name: 'Dermatology', img: DermatologyImage },
                        { name: 'Gynecology', img: GynecologyImage },
                        { name: 'Oncology', img: OncologyImage },
                        { name: 'Gastroenterology', img: GastroenterologyImage },
                        { name: 'Endocrinology', img: EndocrionolgyImage },
                        { name: 'Ophthalmology', img: OphthalmologyImage }
                    ].map((treatment, index) => (
                        <div className="card" key={index}>
                            <img src={treatment.img} alt={treatment.name} />
                            <h3>{treatment.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="contact">
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out to us!</p>
            </div>

            <footer>
                <p>&copy; 2024 Aashirvad Hospital. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default FrontPage;
