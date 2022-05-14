import React, {useRef, useEffect} from 'react';
import useOnScreen from '../useOnScreen';


import { headerIds } from "../globals";
import "./Projects.css";

export default function Projects({setActive}) {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    useEffect(() => {
        if (isVisible) {
            setActive("skills")
        }
      }, [isVisible])

    return (
        <section className="content-section projects text-center text-white" id={headerIds.projects}>
            <div ref={ref}>

            </div>
        </section>
    );
}