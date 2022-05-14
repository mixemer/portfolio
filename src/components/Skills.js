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

                <div class="row">
                    <SkillCard />
                    <SkillCard />
                    <SkillCard />
                    <SkillCard />
                </div>
            </div>
        </section>
    );
}