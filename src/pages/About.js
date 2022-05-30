import React, {useRef, useEffect} from 'react'
import useOnScreen from '../useOnScreen';

import "./About.css";
import { headerIds, socialMediaLinks } from "../globals";

// TODO: add details about yourself
// TODO: add hackathons, leadership events
// TODO: add links for the awards and Extracurricular Activities
export default function About( {setActive} ) {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    useEffect(() => {
        if (isVisible) {
            setActive(headerIds.about)
        }
      }, [isVisible])

    return (
        <section className="content-section about" id={headerIds.about} ref={ref}>
            <div className="container">
                <div className="card mb-3 bg-transparent">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={require('../img/profile.JPG')} className="img ms-4 mt-3 mb-3" style={{ maxWidth: "80%" }} alt="..."></img>

                            <div className='text-center'>
                                <a className="btn btn-primary border" style={{backgroundColor: "#333333"}} href={socialMediaLinks.github} role="button" target="_blank">
                                    <i className="fab fa-github fs-3"></i>
                                </a>

                                <a className="btn btn-primary border" style={{backgroundColor: "#0082ca", margin: "10px"}} href={socialMediaLinks.linkedin} role="button" target="_blank">
                                    <i className="fab fa-linkedin-in fs-3 "></i>
                                </a>
                                
                                <a className="btn btn-primary border" style={{backgroundColor: "#55acee"}} href={socialMediaLinks.twitter} role="button" target="_blank">
                                    <i className="fab fa-twitter fs-3"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body bg-transparent">
                                <h4 className="card-title">Mehmet Sahin</h4>

                                <p>
                                    Software Engineer
                                </p>

                                <br></br>

                                <p> 
                                I am a computer science student at Brooklyn College. I spend most of my time on programming and learning new technologies. I am truly a self-learner who likes to take challenges and excel his programming skills. I am seeking an internship as a Software Developer to keep learning and contributing to the community.
                                </p>
                                
                                <br></br>

                                <p>
                                Education:
                                </p>

                                <ul>
                                    <li>Brooklyn College - Computer Science. 2021 - 2023, GPA: 3.6</li>
                                    <li>Borough of Manhattan Community College (BMCC) - Computer Science. 2016 - 2019, GPA: 4.0, Honors Student</li>
                                </ul>

                                <p> 
                                Awards:
                                </p>

                                <ul>
                                    <li>Trailblazer of the Year at BMCC</li>
                                    <li>Academic Excellence in Computer Science Award at BMCC</li>
                                </ul>

                                <p> 
                                Extracurricular Activities:
                                </p>

                                <ul>
                                    <li>First BMCC Hackathon, April 6th, 2019 – Co-Chair</li>
                                    <li>Goldman Sachs, NY, 2019 – College Collaborative Graduate</li>
                                    <li>Computer Science Club – VP</li>
                                    <li>Phi Theta Kappa – Member</li>
                                    <li>Partner Lending Universal Support (P.L.U.S.) Volunteering  – Volunteer</li>
                                    <li>BMCC Money Works Scholarship – Ambassador</li>
                                </ul>

                               <p>Certifications:</p>
                               <ul>
                                    <li>Dean’s List at Brooklyn College: Fall 2021, Spring 2022</li>
                                    <li>Dean’s List at BMCC: Spring 2017, Fall 2017, Spring 2018, Fall 2019</li>
                                    <li>Certificate of Achievement BMCC Achievers: September 2017 and September 2018</li>
                                    <li>Certificate of Achievement by Peer Mentoring Program: April 2017 and May 2018</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}