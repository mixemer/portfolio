import "./About.css";
import { headerIds } from "../globals";

// TODO: add details about yourself
export default function About() {
    return (
        <section className="content-section about" id={headerIds.about}>
            <div className="container">
                <div className="card mb-3 bg-transparent">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="/profile.jpg" className="img-fluid rounded-start" alt="..."></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title">Mehmet Sahin</h4>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <a class="btn btn-primary" style={{backgroundColor: "#333333"}} href="#!" role="button">
                                    <i class="fab fa-github"></i>
                                </a>

                                <a class="btn btn-primary" style={{backgroundColor: "#0082ca", margin: "10px"}} href="#!" role="button">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>

                                {/* <a class="btn btn-primary" style={{backgroundColor: "#3b5998"}} href="#!" role="button">
                                    <i class="fab fa-facebook-f"></i>
                                </a> */}
                                
                                <a class="btn btn-primary" style={{backgroundColor: "#55acee"}} href="#!" role="button">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div className="col-lg-10 mx-auto text-center">
                                <h4> Learn more about my: </h4>
                                <a class="p-3 m-2 btn btn-dark btn-lg shadow-lg border" href={"#"+headerIds.skills} role="button">
                                    Skills
                                </a>
                                <a class="p-3 m-2 btn btn-dark btn-lg shadow-lg border" href={"#"+headerIds.projects} role="button">
                                    Projects
                                </a>
                                <a class="p-3 m-2 btn btn-dark btn-lg shadow-lg border" href={"#"+headerIds.timeline} role="button">
                                    Timeline
                                </a>
                                <a class="p-3 m-2 btn btn-secondary btn-lg shadow-lg border" href="#!" role="button">
                                    Resume
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}