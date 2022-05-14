import React, {useState, useEffect} from 'react'
import { headerIds } from "../globals";
import "./Header.css";

function Header() {
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

    return (
        <nav className={`navbar navbar-expand-lg p-3 fixed-top ${isTranspanrent ? "bg-transparent" : "navbar-shrink"}`}>
            <div className="container">
                <a className="navbar-brand" style={{ fontSize: isTranspanrent ? "" : "1.5rem" }} href="#" >
                    <b> Mehmet Sahin </b>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ flexGrow: 0 }}>
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href={"#"+headerIds.about}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"#"+headerIds.skills}>Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"#"+headerIds.projects}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"#"+headerIds.timeline}>Timeline</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"#"+headerIds.contact}>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
