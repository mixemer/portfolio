import React, {useState, useEffect} from 'react'
import { headerIds } from "../globals";
import "./Header.css";

function Header({ active, setActive }) {
    const [isTranspanrent, setIsTranspanrent] = useState(true);

    const listenScrollEvent = () => {
       if (window.scrollY > 50) {
        setIsTranspanrent(false)
       } else {
        setIsTranspanrent(true)
       }
      }
      
      useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
      }, []);

      const OnNavlinkClick = (name) => {
        setActive(name);
      }

    return (
        <nav className={`navbar navbar-expand-lg p-3 fixed-top ${isTranspanrent ? "bg-transparent" : "navbar-shrink"}`}>
            <div className="container">
                <a className="navbar-brand" style={{ fontSize: isTranspanrent ? "" : "1.5rem" }} href="#" onClick={() => OnNavlinkClick("")}>
                    <b> Mehmet Sahin </b>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ flexGrow: 0 }}>
                    <ul className="navbar-nav m-auto">
                        
                        <li className="nav-item">
                            <a className={`nav-link ${active === headerIds.skills ? "active" : ""}`} href={"#"+headerIds.skills} onClick={() => OnNavlinkClick(headerIds.skills)}>Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${active === headerIds.projects ? "active" : ""}`} href={"#"+headerIds.projects} onClick={() => OnNavlinkClick(headerIds.projects)}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${active === headerIds.about ? "active" : ""}`} onClick={() => OnNavlinkClick(headerIds.about)} href={"#"+headerIds.about}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${active === headerIds.contact ? "active" : ""}`} href={"#"+headerIds.contact} onClick={() => OnNavlinkClick(headerIds.contact)}>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={require('../img/resume.pdf')} target="_blank">
                                <b>
                                    <i className="fa-solid fa-file-pdf px-2"></i>
                                    Resume
                                </b>
                            </a>        
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
