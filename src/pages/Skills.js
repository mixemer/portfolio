import React, {useRef, useEffect} from 'react'
import useOnScreen from '../useOnScreen';

import "./Skills.css";
import { headerIds, skills } from "../globals";
import SkillCard from "../components/SkillCard";

export default function Skills( {setActive} ) {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    useEffect(() => {
        if (isVisible) {
            setActive(headerIds.skills)
        }
    }, [isVisible])

    const skillItems = skills.map((_skill) =>  
        <SkillCard key={_skill.name.toString()} skill={_skill} icon={<i className="fa-brands fa-unity"></i>}/>);

    return (
        <section className="content-section skills text-center text-white" id={headerIds.skills}>
            <div className="container">
                {/* content header */}
                <div>
                    <h2> Skills </h2>
                </div>
                {/* content header details */}
                <div>
                    <p>Below are some of my skills, and I'm always looking to learn more.</p>
                </div>

                <br></br>

                {/* TODO: ref someties does not work */}
                <div className="row" ref={ref}>
                    {skillItems}
                </div>
            </div>
        </section>
    );
}