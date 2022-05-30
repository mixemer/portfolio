import "./SkillCard.css";

export default function SkillCard({ skill }) {
    return (
        <div className="col-lg-4 col-md-6 mb-5">
            <div className="card h-100 bg-transparent">
                <span className="service-icon mx-auto mb-3 text-secondary">
                <i className={skill.iconClassName}></i>
                </span>
                <div className="card-body">
                    <h4 className="card-title"><b>{skill.name}</b></h4>
                    <p className="card-text text-faded opacity-75 fs-6">
                     {skill.detail}
                    </p>
                </div>
            </div>
        </div>
    );
}