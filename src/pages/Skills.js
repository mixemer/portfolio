import React, {useRef, useEffect} from 'react'
import useOnScreen from '../useOnScreen';

import "./Skills.css";
import { headerIds } from "../globals";
import SkillCard from "../components/SkillCard";

export default function Skills( {setActive} ) {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    useEffect(() => {
        if (isVisible) {
            setActive("skills")
        }
      }, [isVisible])

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
                    <SkillCard title="Unity, C#" icon={<i className="fa-brands fa-unity"></i>}/>
                    <SkillCard title="IOS, Swift" icon={<i className="fa-brands fa-apple"></i>}/>
                    <SkillCard title="Flutter, Dart" icon={<i className="fa-solid fa-f"></i>}/>
                    <div ref={ref}></div>
                    <SkillCard title="C++" icon={<i className="fa-solid fa-c"></i>}/>
                    <SkillCard title="JavaScript, HTML, CSS" icon={<i className="fa-solid fa-code"></i>}/>
                    <SkillCard title="Machine Learning, Artificial Intelligence" icon={<i className="fa-solid fa-share-nodes"></i>}/>
                </div>
            </div>
        </section>
    );
}