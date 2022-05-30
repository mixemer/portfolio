import React, {useRef, useEffect} from 'react'
import useOnScreen from '../useOnScreen';

import "./About.css";
import { headerIds, socialMediaLinks } from "../globals";

// TODO: add details about yourself
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
                        </div>
                        <div className="col-md-8">
                            <div className="card-body bg-transparent">
                                <h4 className="card-title">Mehmet Sahin</h4>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer bg-transparent">
                                <a className="btn btn-primary" style={{backgroundColor: "#333333"}} href={socialMediaLinks.github} role="button" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>

                                <a className="btn btn-primary" style={{backgroundColor: "#0082ca", margin: "10px"}} href={socialMediaLinks.linkedin} role="button" target="_blank">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                
                                <a className="btn btn-primary" style={{backgroundColor: "#55acee"}} href={socialMediaLinks.twitter} role="button" target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                        {/* <div className="card-footer bg-transparent" ref={ref}>
                            <div className="col-lg-10 mx-auto text-center">
                                <h4> Learn more about my: </h4>
                                <a className="p-3 m-2 btn btn-dark btn-lg shadow-lg border" href={"#"+headerIds.skills} role="button">
                                    <b>Skills</b>
                                </a>
                                <a className="p-3 m-2 btn btn-dark btn-lg shadow-lg border" href={"#"+headerIds.projects} role="button">
                                    <b>Projects</b>
                                </a>
                                <a className="p-3 m-2 btn btn-secondary btn-lg shadow-lg border" href="/resume.pdf" target="_blank" role="button">
                                <i className="fa-solid fa-file-pdf px-1"></i>
                                    <b>Resume</b>
                                </a>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </section>
    );
}