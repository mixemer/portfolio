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
                 {Object.keys(projects).map((key) =>
                    <ProjectGroup projectGroupName={key}/> 
                 )}
                <div>
                </div>
            </div>
        </section>
    );
}