import React from "react";
import "./Aboutus.css";
import logo from "../assets/doctors/Hospital_Logo.jpg";
import arrow from "../assets/doctors/Arrow_Logo.png";
import first from "../assets/doctors/first.png";
import second from "../assets/doctors/second.png";
import third from "../assets/doctors/third.png";
import fourth from "../assets/doctors/fourth.png";
import staff from '../assets/doctors/staff&nurse.png'
import { Navbars } from "./Navbars";
export const Aboutus = () => {
  return (
    <>
      <div className="main">
        <div className="Heading">
          <img className="logo" src={logo} alt="" />
          <div className="headings">
            <div className="navs">{<Navbars/>}</div>
            <div className="heading2">We welcome you to Aashirvad hospital, Your health is our topmost prioroty.</div>
          </div>
        </div>
        <div className="part2">
          <div className="part21">
            Aashirvad Hospital is the leading multi-specialty healthcare in
            Kurukshetra, and we are proud of this prestigious position. We take
            a holistic approach to patient care in our quest for the best
            medical standards at affordable prices. Our competence has been
            central to the 25-plus years of successful treatment of over 8600
            cases of both surgery and non-surgical conditions.
          </div>
          <div className="part22">
            <img className="arrows" src={arrow} />
            <div className="hd">Comprehensive Services</div>
            <div className="txt">
              Our 150+-bed central AC Hospital has several departments, such as
              Medicine and Critical Care, Obstetrics and Gynecology,
              Orthopedics, Cardiology, Pathology, Nephrology and Dialysis,
              Urology, Neurology, Radiology, Pediatrics, Anesthesiology, ICU,
              Laparoscopic, and Bariatrics.
            </div>
            <div className="imgs"><img className='lastimages' src={first}/></div>
          </div>
          <div className="part22">
            <img className="arrows" src={arrow} />
            <div className="hd">Expert Team</div>
            <div className="txt">
              Our team of over 145 doctors, specialists, nursing, and support staff
              guarantees that patients get respectful treatment at any time of the day.
              We have a team of doctors and specialists committed to formulating
              individualized treatment regimens following every patient's needs.
            </div>
            <div className="imgs"><img className='lastimages' src={second}/></div>
          </div>
              <div className="part22">
                <img className="arrows" src={arrow} />
                <div className="hd">State-of-the-Art Infrastructure</div>
                <div className="txt">
                  We use modern technology and cutting-edge facilities,
                  including digital radiography, arthroscopy, and
                  computer-assisted surgery, to achieve the best outcomes for
                  our patients.
                </div>
                <div className="imgs"><img className='lastimages' src={third} /></div>
            </div>
              <div className="part22">
                <img className="arrows" src={arrow} />
                <div className="hd">24x7 Emergency Services</div>
                <div className="txt">
                  We realize that emergencies can occur anytime; therefore, we
                  have 24x7 instant emergency services and ambulance pickup,
                  ensuring timely medical aid.
                </div>
                <div className="imgs"><img className='lastimages' src={fourth}/></div>
              </div>
          </div>
          <div className="part3">
            <div className="part23"><img className="staff" src={staff}/></div>
            <div className="part24"><h2>Our Dedicated Staff and Nurses</h2>Our nursing team includes nurses with different competencies prepared to offer general care and help patients with simple activities, including administering medication. They never rest to ensure patients are assured and well-attended during their stay at our hospital.

Our staff and nurses are on duty 24/7 and readily available to patients with questions, assistance, or emergencies. Their commitment and professionalism greatly enhance our healthcare service and make Shri Balaji Aarogyam Hospital a reliable healthcare center in Kurukshetra, Haryana.

Shri Balaji Aarogyam Hospital is committed to making good, affordable healthcare services available to the community. With our patient-centric approach, top-notch infrastructure, and a team of expert doctors, our goal is to be the healthcare destination of choice for individuals and families in Kurukshetra and beyond. Trust us with your medical care and feel the difference in how you are treated.</div>
          </div>
      </div>
        {/* </div> */}
    </>
  );
};
