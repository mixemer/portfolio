import React, {useRef, useEffect} from 'react';
import useOnScreen from '../useOnScreen';
import { headerIds, projects } from "../globals";
import ProjectGroup from './ProjectGroup';
import "./Projects.css";

export default function Projects({setActive}) {
    const ref = useRef()
    const isVisible = useOnScreen(ref)


    useEffect(() => {
        if (isVisible) {
            setActive(headerIds.projects)
        }
      }, [isVisible])

    return (
        <section className="content-section projects text-center text-white" id={headerIds.projects}>
            <div ref={ref} className="container">
                {/* content header */}
                <div>
                    <h2> Projects </h2>
                </div>
                {/* content header details */}
                <div>
                    <p>Here you can see some of the projects I've done on my own time.</p>
                </div>
                {/* {[...Array(10)].map((x, i) =>
                    <ObjectRow key={i} />
                )} */}
                 {Object.keys(projects).map((key) =>
                    <ProjectGroup projectGroupName={key}/> 
                 )}
                    {/* <ProjectGroup projectGroupName={projects.games}/> */}
                <div>
                    {/* <h4 className="text-start"> Games </h4>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 p-0">
                            <PortfolioItem to="exampleModal" />
                        </div>
                        <div className="col-lg-4 col-md-6 p-0">
                            <PortfolioItem to="exampleModal" />
                        </div>
                        <div className="col-lg-4 col-md-6 p-0">
                            <PortfolioItem to="exampleModal" />
                        </div>
                        <div className="col-lg-4 col-md-6 p-0" >
                            <PortfolioItem to="exampleModal" />
                        </div>
                    </div>
                    <br></br>
                    <h4 className="text-start"> Games </h4>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 p-0">
                            <PortfolioItem to="exampleModal" />
                        </div>
                        <div className="col-lg-4 col-md-6 p-0">
                            <PortfolioItem to="exampleModal" />
                        </div>
                        <div className="col-lg-4 col-md-6 p-0">
                            <PortfolioItem to="exampleModal" />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}