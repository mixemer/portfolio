import "./Skills.css";
import { headerIds } from "../globals";
import SkillCard from "./SkillCard";

export default function Skills() {
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

                <div className="row">
                    <SkillCard title="Unity, C#" icon={<i className="fa-brands fa-unity"></i>}/>
                    <SkillCard title="IOS, Swift" icon={<i className="fa-brands fa-apple"></i>}/>
                    <SkillCard title="Flutter, Dart" icon={<i className="fa-solid fa-f"></i>}/>
                    <SkillCard title="C++" icon={<i className="fa-solid fa-c"></i>}/>
                    <SkillCard title="JavaScript, HTML, CSS" icon={<i className="fa-solid fa-code"></i>}/>
                    <SkillCard title="Machine Learning, Artificial Intelligence" icon={<i className="fa-solid fa-share-nodes"></i>}/>
                </div>
            </div>
        </section>
    );
}