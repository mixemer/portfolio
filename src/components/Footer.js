import "./Footer.css";
import { headerIds, socialMediaLinks } from "../globals";


export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row text-center">
                    {/* Copy right */}
                    <div className="col-md-4 m-auto">
                        <span className="copyright">Copyright © Mehmet Sahin 2022</span>
                    </div>

                    {/* Social Media */}
                    <div className="col-md-4 m-auto">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a className="btn btn-primary" style={{backgroundColor: "#333333"}} href={socialMediaLinks.github} role="button" target="_blank">
                                    <i className="fab fa-github fs-2"></i>
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a className="btn btn-primary" style={{backgroundColor: "#0082ca", margin: "10px"}} href={socialMediaLinks.linkedin} role="button" target="_blank">
                                    <i className="fab fa-linkedin-in fs-2"></i>
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a className="btn btn-primary" style={{backgroundColor: "#55acee"}} href={socialMediaLinks.twitter} role="button" target="_blank">
                                    <i className="fab fa-twitter fs-2"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/*  */}
                    <div className="col-md-4 m-auto">
                        <ul className="list-inline quicklinks">
                            <li>
                                <a href={"#"+headerIds.skills}>Skills</a>
                            </li>

                            <li>
                                <a href={"#"+headerIds.projects}>Projects</a>
                            </li>

                            <li>
                                <a href={"#"+headerIds.about}>About</a>
                            </li>
                            <li>
                                <a href={require('../img/resume.pdf')} target="_blank">
                                <i className="fa-solid fa-file-pdf px-1"></i>
                                    Resume
                                </a>
                            </li>

                            <li>
                                <a style={{ fontWeight: "normal" }} href="https://sites.google.com/view/mehmetsahin/" target="_blank">Old Page</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}